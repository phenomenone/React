import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value:'general', label: 'General'},
        {value:'business', label: 'Negocios'},
        {value:'entertainment', label: 'Entretenimiento'},
        {value:'health', label: 'Salud'},
        {value:'science', label: 'Ciencia'},
        {value:'sports', label: 'Deportes'},
        {value:'technology', label: 'Tecnologia'}
    ];
    // utilizar el hook
    const [ categoria, SelecNoticias ] = useSelect('general', OPCIONES);

    // submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (  
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form 
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categorías</h2>

                    <SelecNoticias />

                    <div className={`${styles.btn_block} input-field col s12`}>
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                            />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;