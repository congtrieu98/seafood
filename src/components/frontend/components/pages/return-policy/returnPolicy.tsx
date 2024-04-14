import Link from "next/link";

function ReturnPlicy() {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 py-10">
            <div className="col-span-1">
                <div className="hidden md:block duration-1000
                        p-2 w-[245px] overflow-y-auto text-center bg-gray-100 shadow">
                    <div className="text-gray-900 text-xl">
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 border-b-2">
                            <div className="text-xl ml-4 text-gray-900">Danh mục trang</div>
                        </div>
                        <Link href={"/page/about-us"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Giới thiệu</div>
                        </Link>
                        <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Chính sách đổi trả hàng</div>
                        </Link>
                        <Link href={"/page/chinh-sach-giao-hang"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Chính sách giao hàng</div>
                        </Link>
                        <Link href={"/page/bo-tieu-chuan-cac-san-pham"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Bộ tiêu chuẩn sản phẩm</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="text-2xl font-bold mb-10">Chính sách đổi trả hàng</div>
                <div className="text-sm mb-5">Kính thưa Quý khách hàng,</div>
                <div>
                    Là Đại sứ mang đến những bữa ăn CHẤT LƯỢNG và HẠNH PHÚC, Hải Sản Hoàng Gia hiểu được sự kỳ vọng của Quý Khách Hàng khi lựa chọn sản phẩm, dịch vụ của Hải Sản Hoàng Gia. Chúng tôi mong muốn số tiền Quý Khách Hàng bỏ ra sẽ nhận được những sản phẩm và dịch vụ thật sự xứng đáng. Chính vì những lý do đó chúng tôi sẵn sàng lấy hết mọi rủi ro của Quý Khách Hàng khi mua hải sản, tiếp nhận mọi khiếu nại của Quý Khách Hàng liên quan đến việc sử dụng sản phẩm và dịch vụ của chúng tôi qua:

                    Hotline: 090 6789 543

                    Fanpage: https://www.facebook.com/haisanhoanggia

                    Hoặc đến trực tiếp cửa hàng Quý Khách Hàng đã mua sản phẩm.

                    CHÚNG TÔI CAM KẾT 1 ĐỔI 1 TẬN NHÀ KHÁCH HÀNG TRONG VÒNG 2H NẾU SẢN PHẨM KHÔNG ĐẠT TIÊU CHUẨN TƯƠI SỐNG, ĐẦY THỊT NHƯ TƯ VẤN.

                    Quý Khách Hàng vui lòng tham khảo các ĐIỀU KIỆN ĐỔI TRẢ HÀNG dưới đây:

                    A. ĐIỀU KIỆN TIẾP NHẬN KHIẾU NẠI:

                    Quý Khách Hàng vui lòng cung cấp hoá đơn và thông tin về sản phẩm và số lượng cần đổi cho nhân viên.
                    Trường hợp Quý Khách Hàng bị mất hoá đơn, xin vui lòng cho nhân viên thu ngân xin lại số điện thoại và thông tin về đơn hàng để chúng tôi tìm ra giao dịch Quý Khách Hàng vừa mua.
                    Hoàng Gia sẽ áp dụng 1 đổi 1 trong điều kiện Quý Khách Hàng chưa sử dụng sản phẩm. Nếu Quý Khách Hàng đã sử dụng sản phẩm, Hoàng Gia xin phép tiếp nhận ý kiến của Quý Khách Hàng và gửi tặng Quý Khách Hàng phiếu ưu đãi cho lần mua hàng sau.
                    Khiếu nại được áp dụng trong vòng 12 tiếng kể từ lúc Quý Khách Hàng nhận hàng đến lúc Hải Sản Hoàng Gia nhận được thông tin khiếu nại.
                    Hải Sản Hoàng Gia xin phép từ chối giải quyết khiếu nại cho các trường hợp quá 12 tiếng kể từ khi nhận hàng.
                    B. CÁC TRƯỜNG HỢP KHIẾU NẠI:

                    1. Sai hoặc thiếu sản phẩm:

                    Nếu Quý Khách Hàng nhận sai/thiếu sản phẩm, Hải Sản Hoàng Gia sẽ tiến hành xác nhận và đổi lại sản phẩm đúng cho Quý Khách Hàng. Nếu Quý Khách Hàng ở khu vực TP. Hồ Chí Minh, thời gian xử lý sẽ là 2 giờ làm việc kể từ khi nhận được phản hồi của Quý Khách Hàng, Hải Sản Hoàng Gia sẽ giao hàng tới tận nhà cho Quý Khách Hàng. Còn đối với trường hợp Quý Khách Hàng ngoài khu vực TP. Hồ Chí Minh, Hải Sản Hoàng Gia sẽ giải quyết bằng những giải pháp linh hoạt hơn như hoàn tiền hoặc tặng voucher mua hàng cho đơn hàng sau.

                    2. Khiếu nại về chất lượng sản phẩm

                    Vì là sản phẩm tươi sống, phần lớn là các sản phẩm được đánh bắt tự nhiên nên đôi lúc sẽ có sự không đồng nhất về chất lượng. Các trường hợp liên quan để rủi ro về chất lượng sản phẩm như sau:



                    * Sản phẩm ốp/ốm:
                    Quý Khách Hàng vui lòng chụp hình hoặc quay phim phần thân và càng của sản phẩm khi Quý Khách Hàng cho rằng sản phẩm bị ốp/ốm để được hỗ trợ. Do đặc tính sinh học, tùy theo mùa mà các sản phẩm Tôm, Cua, Ghẹ có thể có tỷ lệ ốp nhẹ nhân viên bán hàng sẽ tư vấn cho Quý Khách Hàng tuỳ theo mùa vụ hiện tại của sản phẩm.



                    * Sản phẩm có mùi hôi:
                    Quý Khách Hàng cần ngừng sử dụng sản phẩm ngay lập tức, gửi phản hồi lại cho Hải Sản Hoàng Gia (HSHG) và vui lòng giữ lại sản phẩm, chúng tôi sẽ thu hồi kiểm tra để xác định vấn đề, nếu đó là mùi đặc trưng của hải sản, HSHG sẽ hâm nóng lại sản phẩm và gửi lại cho quý khách, trong trường hợp mùi đó do lỗi của sản phẩm, HSHG sẽ đổi lại sản phẩm khác hoặc hoàn tiền cho Quý khách.


                    * Sản phẩm có dị vật lạ:

                    Quý Khách Hàng cần ngừng sử dụng sản phẩm ngay lập tức, gửi phản hồi lại cho Hải Sản Hoàng Gia (HSHG) và vui lòng giữ lại sản phẩm Nếu sản phẩm lỗi HSHG sẽ thu hồi, nếu nó là đặc tính tự nhiên của sản phẩm, HSHG sẽ giải thích cho Quý Khách Hàng hiểu và yên tâm sử dụng.



                    3. Khiếu nại về dịch vụ:
                    Hải Sản Hoàng Gia sẵn sàng tiếp nhận mọi khiếu nại hoặc góp ý của Quý Khách Hàng về dịch vụ của chúng tôi như: thái độ của nhân viên, cân hàng, nhận hàng, chế biến, chất lượng sản phẩm, hậu mãi và tất cả các vấn đề phát sinh khác với thái độ cầu thị.

                    Hải Sản Hoàng Gia cam kết luôn lắng nghe và cải tiến liên tục để nâng cao chất lượng và phục vụ Quý Khách Hàng ngày một tốt hơn.

                    Rất cảm ơn Quý Khách Hàng đã luôn tin tưởng và sử dụng sản phẩm, dịch vụ của Hải Sản Hoàng Gia.
                </div>

            </div>
        </div>
    );
}

export default ReturnPlicy;