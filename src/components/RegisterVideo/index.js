import React from "react";
import { createClient } from '@supabase/supabase-js'
import { StyledRegisterVideo } from "./styles";

// Custom hook to control how inputs and submit should behave
function useForm(props) {
    const [values, setValues] = React.useState(props.initialValues);

    return {
        values,
        handleChange: (e) => {
            setValues({
                ...values, 
                [e.target.name]: e.target.value
            })
        },
        clearForm() {
            setValues({});
        }
    };
}

// Supabase connection
const SUPABASE_URL = 'https://wpkzomuqmfitoycvqibz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwa3pvbXVxbWZpdG95Y3ZxaWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjczNjQsImV4cCI6MTk4Mzc0MzM2NH0.g0-mVSWf62ihLa4zEwNpy-doKCbMUir8izfRjW0s6gg';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Modal with a form to add a new video to the app
export default function RegisterVideo() {
    const customHook = useForm({initialValues: {titulo:'', url:''}})

    const [visibleForm, setVisibleForm] = React.useState(false);
    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setVisibleForm(true)}>
                +
            </button>
            {visibleForm && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    // console.log(customHook.values);

                    supabase.from("videos").insert({
                        title: customHook.values.titulo,
                        url: customHook.values.url,
                        // TODO: get thumb from url automatically
                        thumb: 'https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg',
                        // TODO: let user select a playlist or create a new one
                        playlist: 'jogos'
                    })
                    .then((resp) => {
                        console.log(resp)
                    })
                    .catch((err) => console.log(err))

                    customHook.clearForm();
                    setVisibleForm(false);
                }}>
                    <div>
                        <button className="close-modal" onClick={() => setVisibleForm(false)}>
                            X
                        </button>
                        <input 
                            placeholder="Título do vídeo" 
                            name="titulo"
                            value={customHook.values.titulo} 
                            onChange={customHook.handleChange}
                            required
                        />
                        <input 
                            placeholder="URL"  
                            name="url"
                            value={customHook.values.url} 
                            onChange={customHook.handleChange}
                            required
                        />
                        <button type="submit" >Cadastrar</button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    )
}