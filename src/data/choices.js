export const choices = {
    "start": {
        "text": "Bạn vừa ra khỏi công ty liền chạy vội đến trạm xe bus, may mắn thay lúc bạn chạy đến thì xe cũng vừa lúc đậu, bạn định bước lên thì trong lòng chợt dâng cảm giác kỳ quái và bất an. Lúc này, quyết định của bạn:",
        "options": [
            {
                "text": "Vẫn tiếp tục bước lên",
                "next": "continueBoarding"
            },
            {
                "text": "Phân vân thêm một lúc",
                "next": "hesitate"
            }
        ]
    },
    "continueBoarding": {
        "text": "Mặc cho cảm giác kỳ quái đang lan tỏa, bạn vẫn bước lên chiếc xe. Ngay khi vừa lên, lạnh lẽo ùa đến làm bạn rợn tóc gáy. Tự nhủ bản thân nhanh chóng mua vé xe rồi trở về nhưng kỳ lạ là xe bus lúc đêm khuya này đầy ắp người nhưng tuyệt nhiên không có âm thanh nào được phát ra cả. Bạn không dám quan sát kỹ, đành chọn một chiếc ghế ở gần cửa sổ, cố gắng tìm một chút an ủi trong sự im lặng đáng sợ này. Nhưng dù bạn ngồi ở đó, cảm giác lạnh buốt không rời đi. Hành động tiếp theo của bạn",
        "options": [
            {
                "text": "Ngủ thiếp đi",
                "next": "sleep"
            },
            {
                "text": "Bấm điện thoại",
                "next": "checkPhone"
            }
        ]
    },
    "hesitate": {
        "text": "Cảm giác kỳ quái vẫn cứ tiếp tục nhưng trong lòng bạn nghĩ đây là chuyến xe cuối cùng nên bạn vẫn đắn đo. Quyết định cuối cùng của bạn:",
        "options": [
            {
                "text": "Lên Xe",
                "next": "continueBoarding"
            },
            {
                "text": "Không Lên",
                "next": "dontBoard"
            }
        ]
    },

    "sleep": {
        "text": "Bạn cảm thấy mắt mình nặng dần, không biết đã qua bao, bạn tỉnh giấc. Bên ngoài thì tối, trong xe lập loè ánh sáng xanh le lói. Hành động của bạn:",
        "options": []
    },
    "checkPhone": {
        "text": "Khi bạn lướt qua các tin tức trên mạng xã hội, một tiêu đề đặc biệt thu hút sự chú ý của bạn: 'Chuyến xe bus ma số 444'. Lòng bạn lạnh toát bởi vì bạn nhận ra rằng chính chuyến xe mà bạn đang đi cũng mang số hiệu 444, con số ma quái đó",
        "options": []
    },
    "dontBoard": {
        "text": "Chuyến xe bus khuất dần trong mắt bạn. Lúc này bạn vẫn đang đứng ở trạm, bạn phân vân việc đi về nhà thế nào",
        "options": []
    }
}
