package ldpd.suso.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/home")
    public String mainPage() {

        return "main";
    }

    // 마이페이지 경로 처리 추가
    @GetMapping("/user/mypage")
    public String myPage() {
        return "member/mypage"; // "member/mypage.html" Thymeleaf 템플릿을 렌더링
    }
}
