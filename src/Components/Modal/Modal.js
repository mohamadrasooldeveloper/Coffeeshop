import React, { useState } from "react";
import { Modal, Button } from "antd";

const CustomModal  = ({ itemId, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const shoeModal = () => {
        setIsModalOpen(true)
    };
    const handleOk =() =>{
        onDelete(itemId)
        setIsModalOpen(false)
    };
    const handleCancle = () =>{
        setIsModalOpen(false)
    };

};
 export default CustomModal  ;