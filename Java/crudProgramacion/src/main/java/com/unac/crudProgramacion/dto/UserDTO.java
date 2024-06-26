package com.unac.crudProgramacion.dto;

import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.*;

import java.util.Date;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Integer idUser;
    private String name;
    private String email;
    private Date birthdate;
}
