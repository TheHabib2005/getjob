
import { getUserDetailsByEmail } from '@/actions/user.action';
import UserProfile from '@/components/shared/page/profile-page'
import { cookies } from 'next/headers'

const Profile = async () => {

    const userEmail = cookies().get("user_token")?.value.split("$")[1]
    console.log(userEmail);

    const { success, user } = await getUserDetailsByEmail(userEmail!)

    if (!success) {
        return <div>something was wrong to access  user data</div>

    }


    return (
        <UserProfile user={user} />
    )
}

export default Profile