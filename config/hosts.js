var one_tick = 20; //seconds

//service name must be unique for a certain host.
//host name must be unique
module.exports = [{
    name: 'clemente',
    host: '188.226.223.252',
    port: 3000,
    ping_service_name: 'http',
    timeout: 10000,
    ping_interval: one_tick,
    failed_ping_interval: one_tick / 3,
    warning_if_takes_more_than: 7000,
    enabled: true,
    services: [{
            name: 'productDetail',
            method: 'get',
            url: '/cliente/productos/cuentas/resumeneselectronicos/fechas',
            input_data: 'idProducto=1',
            expected: {
                statuscode: 200,
                contains: 'fechasResumenesDisponibles'
            }
        },

        {
            name: 'accionesQuiero',
            method: 'get',
            url: '/parametros/opcionesquiero',
            input_data: 'idCodigoProducto=0&idMoneda=1',
            expected: {
                statuscode: 200,
                contains: 'codigoAccionQuiero'
            }
        }
    ]
}];
