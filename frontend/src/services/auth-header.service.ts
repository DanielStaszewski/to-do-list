
export default function authHeader() {
    let user: any = localStorage.getItem('user');
    if(!user) return {};
    user = JSON.parse(user);
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
}