
import { useState } from 'react'

export const ModalFuntion = (initialvalue = false) => {

    const [isOpen, setISopen] = useState(initialvalue);
    const openmodal = () => setISopen(true);
    const closemodal = () => setISopen(false);
    return (isOpen, openmodal, closemodal);


}
