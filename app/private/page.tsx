import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'
import { signOut } from '../login/actions'

export default async function PrivatePage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (<div>
        <button onClick={signOut}>Sair</button>
    </div>)
}