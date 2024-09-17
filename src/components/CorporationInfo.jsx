import React from 'react';

const CorporationInfo = () => {
    return (
        <div className="bg-black text-white p-8 text-center">
           
            <div className="flex items-center justify-center mb-4">
                <img 
                    src="https://yt3.googleusercontent.com/ytc/AIdro_lmtQy50fgfWqKeNyiVHuWASOhIr8ROoig6a4IJC1ClsKc=s900-c-k-c0x00ffffff-no-rj" 
                    alt="Corporación Logo" 
                    className="w-16 h-16 mr-4" // Ajusta el tamaño según tus necesidades
                />
                <h2 className="text-4xl font-bold text-purple-500">Corporación Nuevo Talento Humano</h2>
            </div>

            <div className="mb-8">
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus a excepturi quae quaerat, harum aspernatur enim distinctio voluptas incidunt placeat ducimus,
                    velit et nihil temporibus praesentium ex doloribus, cum fugiat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quam accusamus quo error magni accusantium! Esse ipsum harum aliquid rem perspiciatis aliquam.
                    Dolore nam tempore excepturi. Blanditiis nisi fugiat ratione recusandae.
                </p>
            </div>

            {/* Sección de imágenes centradas */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJjB2MuxDxqyldBeAxvBW2xbFLJVkM322WA&s"
                    alt="Imagen 1"
                    className="rounded-lg shadow-lg w-48 h-auto"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAwAU4ymtyu7pjnn9yh0AV76qPHAtTydC2w&s"
                    alt="Imagen 2"
                    className="rounded-lg shadow-lg w-48 h-auto"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_ptligSgrNz6krBLWv0fhfJyaHiIUUOGzg&s"
                    alt="Imagen 3"
                    className="rounded-lg shadow-lg w-48 h-auto"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeP3u_T4mB7_HTGDFzIaa3z3VbWsNnNJh1UISUEShv0q6Nqh5S2cxfmf8Fc5N4QR-xuM&usqp=CAU"
                    alt="Imagen 4"
                    className="rounded-lg shadow-lg w-48 h-auto"
                />
            </div>
        </div>
    );
};

export default CorporationInfo;
