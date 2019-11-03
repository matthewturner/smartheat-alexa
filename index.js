const SmartHeat = {
    aws: {
        helpers: require('./aws/helpers'),
        ThermostatRepository: require('./aws/ThermostatRepository'),
        HoldStrategy: require('./aws/HoldStrategy'),
        ProfileGateway: require('./aws/ProfileGateway')
    }
};

module.exports = SmartHeat;