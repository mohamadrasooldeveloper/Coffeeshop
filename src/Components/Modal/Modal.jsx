import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function DeleteModal({ isOpen, onDelete, onCancel }) {
  return (
    <Modal
      title="تایید حذف"
      open={isOpen}
      onOk={onDelete}
      onCancel={onCancel}
      okText="حذف"
      cancelText="بستن"
      cancelButtonProps={{ danger: true }}
    >
      <p>آیا از حذف محصول مطمئن هستید؟!</p>
    </Modal>
  );
}
