import React from 'react';
import './Map.styles.css';

export const Map = () => {
  return (
    <div className="google-map">
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.721573725772!2d12.547427515880969!3d55.69382828053764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253aceaa7bf15%3A0xf6f379d357870e6b!2zTsO4cnJlYnJvZ2FkZSwgS8O4YmVuaGF2bg!5e0!3m2!1sen!2sdk!4v1652784806862!5m2!1sen!2sdk"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
