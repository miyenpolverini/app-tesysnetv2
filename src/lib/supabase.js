import { createClient } from '@supabase/supabase-js';

// Estas variables vendrán del archivo .env que crearemos
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://tusupabaseurl.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "tu_clave_anonima_aqui";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
