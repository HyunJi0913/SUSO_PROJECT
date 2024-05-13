package ldpd.suso.entity;

import jakarta.persistence.*;
import ldpd.suso.security.MemberRole;
import lombok.Data;
import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
@Data
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer member_id;

    private String username;

    private String password;

    private String name;

    @CreationTimestamp
    private Timestamp createdAt;

}
