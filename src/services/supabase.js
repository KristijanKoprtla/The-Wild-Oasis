import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jykhnmhnhltpkxqmxzjf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5a2hubWhuaGx0cGt4cW14empmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4NDIwOTUsImV4cCI6MjAxMTQxODA5NX0.A0SVTN9Pz5NI2-u52E8aUa0xu8734UxJAR8jZfRFYV8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
