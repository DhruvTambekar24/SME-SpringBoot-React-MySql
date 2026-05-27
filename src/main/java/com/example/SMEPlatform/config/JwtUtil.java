// package com.example.SMEPlatform.config;

// import io.jsonwebtoken.*;
// import org.springframework.stereotype.Component;
// import java.util.Date;

// @Component
// public class JwtUtil {

//     private final String SECRET = "secret";

//     public String generateToken(String email) {
//         return Jwts.builder()
//                 .setSubject(email)
//                 .setIssuedAt(new Date())
//                 .setExpiration(new Date(System.currentTimeMillis() + 86400000))
//                 .signWith(SignatureAlgorithm.HS256, SECRET)
//                 .compact();
//     }

//     public String extractEmail(String token) {
//     Claims claims = Jwts.parser()
//         .setSigningKey(SECRET)
//         .parseClaimsJws(token)
//         .getBody();
//     return claims.getSubject();
//     }
// }
package com.example.SMEPlatform.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    private final Key key = Keys.hmacShaKeyFor(
            "mysecretkeymysecretkeymysecretkey".getBytes()
    );

    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                .signWith(key)
                .compact();
    }
}