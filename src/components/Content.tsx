import { useState } from 'react';
import './Content.scss'
import Features from './Features'
import RentalForm from './RentalForm'
import Modal from './Modal';
const Content = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className="car-content">
            <div className="car-content-main">
                <p className='car-title'>HYUNDAI SANTAFE 2018</p>
                <ul className="content__nav-list">
                    <li className="content__nav-item"><a href="#" className="content__nav-link">Số tự động</a></li>
                    <li className="content__nav-item"><a href="#" className="content__nav-link">Giao xe tận nơi</a></li>
                    <li className="content__nav-item"><a href="#" className="content__nav-link">Đặt xe nhanh</a></li>
                    <li className="content__nav-item"><a href="#" className="content__nav-link">Miễn thế chấp</a></li>
                </ul>
                <hr className='content_nav-hr' />
                <div className='content-section'>
                    <p className='content-section-title'>Đặc điểm</p>
                    <div className='list-characteristic'>
                        <div className='content-section-characteristic'>
                            <img src="/images/soghe.png" alt="" />
                            <div className='characteristic-item'>
                                <span>Số ghế</span>
                                <p> 7 chỗ</p>
                            </div>
                        </div>
                        <div className='content-section-characteristic'>
                            <img src="/images/manual-transmission.png" alt="" />
                            <div className='characteristic-item'>
                                <span>Truyền động</span>
                                <p> Số tự động</p>
                            </div>
                        </div>
                        <div className='content-section-characteristic'>
                            <img src="/images/car-oil.png" alt="" />
                            <div className='characteristic-item'>
                                <span>Nhiên liệu</span>
                                <p> Xăng</p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='content_nav-hr' />
                <div className='content-section'>
                    <p className='content-section-title'>Mô tả</p>
                    <p className='content-section-des'>HYUNDAI SANTAFE (AT) số tự động đăng ký tháng 06/2018.Xe gia đình mới đẹp, nội thất nguyên bản, sạch sẽ, bảo dưỡng thường xuyên, rửa xe miễn phí cho khách.Xe rộng rãi, an toàn, tiện nghi, phù hợp cho gia đình du lịch.Xe trang bị hệ thống cảm biến lùi, gạt mưa tự động, đèn pha tự động, camera hành trình, hệ thống giải trí AV cùng nhiều tiện nghi khác…</p>
                </div>
                <hr className='content_nav-hr' />
                <div className='content-section'>
                    <p className='content-section-title'>Các tiện nghi khác</p>
                    <Features />
                </div>
                <hr className='content_nav-hr' />
                <div className='content-section'>
                    <p className='content-section-title'>Giấy tờ thuê xe</p>
                    <div className='collateral-des'>
                        <span>
                            Chọn 1 trong 2 hình thức
                        </span>
                        <p className='collateral-item first'>1. GPLX (đối chiếu) & CCCD (đối chiếu VNeID)</p>
                        <p className='collateral-item'>2. GPLX (đối chiếu) & Passport (giữ lại)  </p>
                    </div>
                    <p className='content-section-title'>Tài sản thế chấp</p>
                    <div className='collateral-des'>
                        <p>15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe) hoặc Xe máy (kèm cà vẹt gốc) giá trị 15 triệu
                        </p>
                    </div>
                </div>
                <hr className='content_nav-hr' />
                <div className='content-section'>
                    <p className='content-section-title'>Vị trí xe</p>
                    <div className='address-detail'>
                        <img src="/images/address.png" alt="" />
                        <p>Quận 10, TP. Hồ Chí Minh</p>
                    </div>
                    <p className='address-des'>Địa chỉ cụ thể sẽ được hiển thị sau khi đặt cọc</p>
                </div>
            </div>
            <div className="car-content-right">
                <div className="item-info-right">
                    <p className='price-detail'>1.100K /ngày</p>
                    <RentalForm />
                    <hr className='info-right-hr' />
                    <div className='total_money'>
                        <span>Đơn giá thuê</span>
                        <span>1 100 000đ/ ngày</span>
                    </div>
                    <hr className='info-right-hr' />
                    <div className='total_money'>
                        <p>Tổng cộng</p>
                        <p>1 100 000đ</p>
                    </div>
                    <div className="rent" onClick={handleOpenModal}>
                        <p>CHỌN THUÊ</p>
                    </div>
                    <Modal show={showModal} onClose={handleCloseModal} />
                </div>
                <div className="item-info-right">
                    <p className='surcharges'>Phụ phí phát sinh</p>
                    <div className='container-surcharges'>
                        <div className='item-surcharges'>
                            <img src="/images/information.png" alt="" />
                            <div>
                                <p>Phí vượt giới hạn</p>
                                <span>Phụ phí phát sinh nếu lộ trình di chuyển vượt quá 350km khi thuê xe 1 ngày</span>
                            </div>
                            <p className='price'>5 000đ/km</p>
                        </div>
                        <div className='item-surcharges'>
                            <img src="/images/information.png" alt="" />
                            <div>
                                <p>Phí quá giờ</p>
                                <span>Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá 5 tiếng, phụ phí thêm 1 ngày thuê</span>
                            </div>
                            <p className='price'>100 000đ/h</p>
                        </div>
                        <div className='item-surcharges'>
                            <img src="/images/information.png" alt="" />
                            <div>
                                <p>Phí vệ sinh</p>
                                <span>Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh (nhiều vết bẩn, bùn cát, sình lầy...)</span>
                            </div>
                            <p className='price'>100 000đ</p>
                        </div>
                        <div className='item-surcharges'>
                            <img src="/images/information.png" alt="" />
                            <div>
                                <p>Phí khử mùi</p>
                                <span>Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu (mùi thuốc lá, thực phẩm nặng mùi...)</span>
                            </div>
                            <p className='price'>350 000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content