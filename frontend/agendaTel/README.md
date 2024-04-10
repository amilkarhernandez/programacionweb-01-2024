RUTAS EN REACT
# instalar dependencia
# npm i react-router-dom

# <BrowserRouter>
#            <Routes>
#                <Route path="/" element={<Login />} />
#                <Route path="/home" element={<Home />} />
#            </Routes>
#       </BrowserRouter>

Pruebas REACT

# Instalar las dependencias en desarrollo
# npm i jest -D
# @testing-library
# npm i @testing-library/jest-dom -D
# npm i @testing-library/user-event -D
# npm i @testing-library/react -D
# npm i @testing-library/react-hooks@7.0.1 -D
# npm i @babel/preset-react -D
# npm i @babel/preset-env -D
# npm i jest-environment-jsdom --save-dev

# crear un archivo en la raiz llamado : babel.config.json
# y pegar la configuracion
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ],
        "@babel/preset-react"
    ]
}

# Crear un archivo de configuracion de JEST llamado: jest.config.cjs
module.exports = {
    testEnvironment: 'jsdom',
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
    collectCoverage: true,
    setupFilesAfterEnv: ['@testing-library/jest-dom/']
};



# Crear el Script en el Package.json
# "test": "jest --coverage=true"

expect render
expect(await screen.findByText('text').toBeInTheDocument());

Find Element
const input = screen.getByTestId('nombre element');
const button = screen.getRole('button',{name: /Siguiente/i});

cambiar o escribir elementos
fireEvent.change(input, {target: {value: 'example text'}})
fireEvent.click(button);

to component
data-testid="testdata"