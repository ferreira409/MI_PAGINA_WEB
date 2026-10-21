-- Tabla con datos extra de cada usuario registrado.
-- Ejecutar en Supabase: SQL Editor → New query → pegar → Run
create table public.perfiles (
  id uuid primary key references auth.users (id) on delete cascade,
  nombre text,
  creado_en timestamptz default now()
);

alter table public.perfiles enable row level security;

create policy "Cada usuario ve su perfil"
  on public.perfiles for select
  using (auth.uid() = id);

create policy "Cada usuario edita su perfil"
  on public.perfiles for update
  using (auth.uid() = id);

-- Crea el perfil automáticamente cuando alguien se registra
create function public.crear_perfil()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.perfiles (id, nombre)
  values (new.id, new.raw_user_meta_data ->> 'nombre');
  return new;
end;
$$;

create trigger al_registrar_usuario
  after insert on auth.users
  for each row execute function public.crear_perfil();
