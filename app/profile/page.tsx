
import { getUserDetailsByEmail } from '@/actions/user.action';
import LogoutButton from '@/components/shared/auth/logoutButton';
import UserProfile from '@/components/shared/page/profile-page'
import { cookies } from 'next/headers'

const Profile = async () => {

    const userEmail = cookies().get("user_token")?.value.split("$")[1]

    const { success, user } = await getUserDetailsByEmail(userEmail!)
    console.log(success);

    if (!success) {
        return <div>something was wrong to access  user data</div>

    }


    return (
        <UserProfile user={user} />
    )
}

export default Profile