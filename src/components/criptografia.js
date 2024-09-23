import React from "react";
import '../CSS/AcercaDeCriptografia.css';

function Criptografia() {
    return (
        <div className="acerca-criptografia">
          <div className="columna">
            <h2>Claude Shannon</h2>
            <p>Claude Elwood Shannon, nacido el 30 de abril de 1916 en Petoskey, Michigan, es considerado uno de los científicos más influyentes del siglo XX. Su trabajo pionero en el campo de la teoría de la información sentó las bases para la revolución digital que transforma nuestras vidas hoy en día.</p>
            <p>Desde temprana edad, Shannon demostró una gran habilidad para las matemáticas y la ingeniería, por lo cual, su padre, un juez con una gran afición por las matemáticas, y su madre, una profesora, fomentaron su curiosidad intelectual. Así, Shannon construyó ingeniosos dispositivos en su juventud, como un modelo de barco a control remoto y un sistema de alarma para su casa.</p>
            <h3>Formación Académica.</h3>
            <p>Shannon estudió ingeniería eléctrica y matemáticas en la Universidad de Michigan, graduándose en 1936, posteriormente, ingresó al Instituto Tecnológico de Massachusetts (MIT), donde obtuvo una maestría en ingeniería eléctrica y un doctorado en matemáticas. Su tesis doctoral, presentada en 1940, revolucionó el análisis de circuitos digitales al aplicar el álgebra booleana a estos sistemas, ya que, esta investigación sentó las bases para el diseño de los modernos ordenadores.</p>
            <h3 >La Teoría de la Información.</h3>
            <p >La obra más destacada de Shannon fue la publicación de su artículo "Una teoría matemática de la comunicación" en 1948. En este trabajo seminal, Shannon introdujo conceptos fundamentales como la entropía, la capacidad de un canal y la codificación, que permitieron cuantificar la información y establecer los límites teóricos de la transmisión de datos.</p>
            <h3>Legado.</h3>
            <p>Claude Shannon falleció en 2001, pero su legado perdura hasta nuestros días, sus ideas revolucionarias continúan impulsando la innovación tecnológica y transformando la forma en que vivimos y trabajamos. Por esto, Shannon es considerado el padre de la era de la información y su nombre está indisolublemente ligado a los avances tecnológicos que disfrutamos hoy en día.</p>
            <div className="imagen-placeholder2">
                <img src={require("./../imagenes/ClaudeShannon.png")} alt="Claude Shannon" />
            </div>
          </div>
    
          <div className="columna">
            <h2>Algoritmo RSA</h2>
            <p>Antes del RSA, la criptografía se basaba en sistemas de clave simétrica, donde tanto el emisor como el receptor compartían la misma clave secreta. Esto planteaba un gran desafío: ¿cómo intercambiar de forma segura esta clave entre dos partes que no se conocían previamente?<br></br>
            A mediados de los años 70, tres matemáticos, Ron Rivest, Adi Shamir y Leonard Adleman, revolucionaron la criptografía al presentar un nuevo concepto: la criptografía de clave pública. En este sistema, cada usuario tiene un par de claves: una pública, que se distribuye libremente, y otra privada, que se mantiene en secreto, los mensajes se cifran con la clave pública y solo pueden ser descifrados con la clave privada correspondiente.</p>
            <p>Así es como nace el algoritmo RSA, nombrado en honor a sus creadores, el cual, se basa en propiedades matemáticas relacionadas con la factorización de números primos. Ahora bien, es extremadamente fácil multiplicar dos números primos grandes, pero extremadamente difícil factorizar un número compuesto en sus factores primos, esta diferencia en la complejidad computacional es lo que hace al RSA tan seguro.</p>
            <h3>Limitaciones.</h3>
            <p>Con el aumento de la potencia computacional y el desarrollo de nuevos algoritmos, la seguridad del RSA puede verse comprometida en el futuro. Además, el RSA es un algoritmo relativamente lento en comparación con algunos algoritmos de cifrado simétrico, por lo cual, este puede llegar a enfrentar problemas con ataques de fuerza bruta de ordenadores cuánticos con una alta potencia de cómputo.</p>
            <div className="video-placeholder">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CMe0COxZxb0?si=PMGxEpoGgeupXodt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
    
          <div className="columna">
            <h2>La Máquina Enigma</h2>
            <p>La máquina Enigma fue un dispositivo electromecánico utilizado por los alemanes durante la Segunda Guerra Mundial para cifrar y descifrar mensajes secretos. Su complejidad y eficiencia la convirtieron en un pilar de la seguridad de las comunicaciones militares nazis.</p>
            <h3>¿Cómo funcionaba?</h3>
            <p>Esta máquina era un conjunto de rotores que se conectaban eléctricamente entre sí, cada rotor tenía 26 contactos, correspondientes a las letras del alfabeto, así, al pulsar una tecla, una corriente eléctrica pasaba a través de una serie de rotores y un reflector, antes de volver a través de los rotores en una ruta diferente y, así, la letra en la que se detenía la corriente era la letra cifrada.</p>
            <h3>El Rompimiento del Código Enigma.</h3>
            <p>A pesar de su complejidad, la Enigma no era indescifrable. Un equipo de criptógrafos aliados, liderados por Alan Turing en Bletchley Park, Reino Unido, trabajó incansablemente para romper el código Enigma, esto lo lograron utilizando una combinación de análisis matemático, técnicas de criptoanálisis y el desarrollo de máquinas como la Bombe, los aliados lograron descifrar un gran número de mensajes alemanes, lo que proporcionó una ventaja crucial en la guerra.</p>
            <h3>Legado.</h3>
            <p>El trabajo de Turing y su equipo en Bletchley Park fue fundamental para el desarrollo de la computación moderna y la criptografía. La máquina Enigma y su desciframiento marcaron un hito en la historia de la criptografía y la guerra electrónica, y su legado continúa influyendo en la seguridad de la información y la tecnología actual.</p>
            <div className="imagen-placeholder">
                <img src={require("./../imagenes/Enigma.png")} alt="Máquina Enigma" />
            </div>
          </div>
        </div>
      );
    }

export default Criptografia;