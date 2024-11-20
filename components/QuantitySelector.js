import React, { useState } from 'react';
import { motion } from 'framer-motion';
const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => setQuantity(1);
    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity - 1);
    const handleRemove = () => setQuantity(0);

    const handleDirectInput = () => {
        const input = parseInt(prompt("Entrez une quantité :"), 10);
        if (!isNaN(input) && input >= 0) {
            setQuantity(input);
        }
    };

    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-center text-3xl'>
            {quantity === 0 ? (
                <motion.button
                    initial={{ opacity: 0, scale: 3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        type: "spring"
                    }}
                    onClick={handleAdd} className="btn-add font-bold">
                    Ajouter +
                </motion.button>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 3 }}
                    whileInView={{ opacity: 1, scale: 1, }}
                    transition={{
                        duration: 1,
                        type: "spring"
                    }} className="quantity-container">
                    <button

                        onClick={quantity === 1 ? handleRemove : handleDecrease} className="btn-remove">
                        {quantity === 1 ? "🗑️" : "−"}
                    </button>
                    <div className="text-4xl w-10 flex justify-center items-center">
                        {quantity}
                    </div>
                    <button onClick={handleIncrease} className="btn-add">
                        +
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default QuantitySelector;
