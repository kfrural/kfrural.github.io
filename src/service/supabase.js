import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xkfwytgfvjgdmvxaacpd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZnd5dGdmdmpnZG12eGFhY3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1NjgxMzgsImV4cCI6MjAzMjE0NDEzOH0.bwyaBJLVf6sS_bClabGh1dsjIk5riNxIDoch22MBx-M"

export const supabase = createClient(supabaseUrl, supabaseKey)