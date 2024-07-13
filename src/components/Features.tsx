import React from 'react';
import './Features.scss';

interface Feature {
    icon: string;
    title: string;
}

const features: Feature[] = [
    { icon: '/images/map-icon.png', title: 'Bản đồ' },
    { icon: '/images/gps-icon.png', title: 'Định vị GPS' },
    { icon: '/images/airbag-icon.png', title: 'Túi khí an toàn' },
    { icon: '/images/bluetooth-icon.png', title: 'Bluetooth' },
    { icon: '/images/usb-icon.png', title: 'Khe cắm USB' },
    { icon: '/images/spare-tire-icon.png', title: 'Lốp dự phòng' },
    { icon: '/images/camera360-icon.png', title: 'Camera 360' },
    { icon: '/images/dashcam-icon.png', title: 'Camera hành trình' },
    { icon: '/images/etc-icon.png', title: 'ETC' },
];

const Features: React.FC = () => {
    return (
        <div className="features">
            {features.map((feature, index) => (
                <div className="feature" key={index}>
                    <img src={feature.icon} alt={feature.title} className="feature-icon" />
                    <p className="feature-title">{feature.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Features;
