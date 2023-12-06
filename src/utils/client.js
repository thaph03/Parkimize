import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zkraqsqlwfvxlmenwkww.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcmFxc3Fsd2Z2eGxtZW53a3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyOTAwNjMsImV4cCI6MjAxNjg2NjA2M30.AnFa_HO6IgJJ5yXiQwlc5l0geMSzNoOxtcTM6hl6k9A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
