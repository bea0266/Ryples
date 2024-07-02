import { useNavigate } from "react-router-dom";
export default function LoginView () {
    const navigate = useNavigate();
    const login = () => {
       navigate('/');
    }
    return (
        <>
                <h1>로그인 화면</h1>
                <button onClick={login}>로그인</button>
        </>

    )

}