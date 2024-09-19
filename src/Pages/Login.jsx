import LoginConcert from "../components/LoginConcert";
import AnimatedBackground2 from "../components/AnimatedBackground2";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";



const Login = () => {
    return (
        <>
         <div className="flex flex-col min-h-screen">
                {/* Barra de navegación fija en la parte superior */}
                <Navbar />

                {/* Fondo animado que ocupa el espacio restante */}
                <AnimatedBackground2 className="flex-grow">
                    <div className="pt-16 flex-grow">
                        {/* Formulario de registro para el concierto */}
                        <LoginConcert />
                    </div>
                </AnimatedBackground2>

                {/* Pie de página fijo en la parte inferior */}
                <Footer />
            </div>
        
        </>
       
    );
};

export default Login;
