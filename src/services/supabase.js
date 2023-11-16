import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://snidrxijhkixsfbnnjgf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuaWRyeGlqaGtpeHNmYm5uamdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NTY4NTIsImV4cCI6MjAxNDMzMjg1Mn0.5PSypYhL2bwlN8mxTob_XL8NsUgsBPXP_XcLFzf4K8A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
