package com.gms.web.service;

import java.util.List;
import org.springframework.stereotype.Service;


@FunctionalInterface
public interface IListServie {
	public List<?> execute(Object o); 
	
}
