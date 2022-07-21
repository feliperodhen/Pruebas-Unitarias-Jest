describe('pruebas en <TestComponent />', () => {
    
    test('esto no puede fallar', () =>{
       
    // 1. inicializacion
    
    const message1 = "hola mamita";
    
    // 2. estimulo
    
    const message2 = message1.trim();
    
    // 3. observar comportamiento
    
    expect(message1).toBe(message2);
    
    });
});
