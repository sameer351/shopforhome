package eshop.homedecor.report.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import eshop.homedecor.report.response.ProductInfoResponse;
import eshop.homedecor.report.service.impl.ProductServiceImpl;

/**
 * Created By Zhu Lin on 3/10/2018.
 */
@CrossOrigin
@RestController
public class ProductController {
   
    @Autowired
    ProductServiceImpl productService;

    /**
     * Show All Categories
     */

       
    @GetMapping("/productall")
    public ProductInfoResponse findAll() {
    	ProductInfoResponse response=new ProductInfoResponse();
    	response.setProductList(productService.findAll());
        return response;
    }

   
}
