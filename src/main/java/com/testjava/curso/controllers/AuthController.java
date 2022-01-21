package com.testjava.curso.controllers;

import com.testjava.curso.dao.UsuarioDao;
import com.testjava.curso.models.Usuario;
import com.testjava.curso.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario) {

        Usuario usuarioLogin = usuarioDao.verificarCredenciales(usuario);
        if (usuarioLogin != null) {

            String tokenJwt = jwtUtil.create(String.valueOf(usuarioLogin.getId()), usuarioLogin.getEmail());
            return tokenJwt;
        }
        return "fallo";
    }

}
