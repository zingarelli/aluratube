import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://wpkzomuqmfitoycvqibz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwa3pvbXVxbWZpdG95Y3ZxaWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjczNjQsImV4cCI6MTk4Mzc0MzM2NH0.g0-mVSWf62ihLa4zEwNpy-doKCbMUir8izfRjW0s6gg';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export function videoService() {
    return {
        getAllVideos() {
            // promise is already fulfilled by select
            return supabase.from('videos').select('*');
        }
    }
}