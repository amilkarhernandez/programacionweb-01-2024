package com.unac.crudProgramacion;

import com.unac.crudProgramacion.dao.UserDAO;
import com.unac.crudProgramacion.dto.UserDTO;
import com.unac.crudProgramacion.entity.UserEntity;
import com.unac.crudProgramacion.services.UserService;
import com.unac.crudProgramacion.services.impl.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class EjemploTest {

    @MockBean
    private UserDAO userDAO;

    @Autowired
    private UserServiceImpl userService;

    private List<UserEntity> userList = new ArrayList<>();

    @BeforeEach
    void setUp() {
        UserEntity obj = new UserEntity();
        obj.setIdUser(1);
        obj.setName("test");
        obj.setEmail("test@test.com");
        obj.setBirthdate(new Date());
        userList.add(obj);
    }

    @Test
    @DisplayName("Should get users")
    void listarDatos(){
        when(userDAO.findAll()).thenReturn(userList);
        List<UserDTO> users = userService.getUsers();
        assert users.size() == 1;
        assert(users.get(0).getName().equals("test"));
    }

    @Test
    @DisplayName("Should save user")
    void saveUser() {

        UserEntity obj = new UserEntity();
        obj.setIdUser(1);
        obj.setName("test");
        obj.setEmail("test@test.com");
        obj.setBirthdate(new Date());

        // Crear un objeto UserDTO para probar
        UserDTO userDTO = new UserDTO();
        userDTO.setIdUser(1);
        userDTO.setName("test");
        userDTO.setEmail("test@test.com");
        userDTO.setBirthdate(new Date());

        // Configurar el comportamiento del método save en el mock
        given(userDAO.save(Mockito.any(UserEntity.class))).willReturn(obj);

        // Llamar al método que quieres probar
        UserDTO expected = userService.saveUser(userDTO);

        // Verificar el resultado esperado
        assert(expected.getIdUser() == 1);
    }
}

