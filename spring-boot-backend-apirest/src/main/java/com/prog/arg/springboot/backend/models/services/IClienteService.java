package com.prog.arg.springboot.backend.models.services;

import java.util.List;

import com.prog.arg.springboot.backend.models.entity.Cliente;

public interface IClienteService {

	public List<Cliente> findAll();
	
}
