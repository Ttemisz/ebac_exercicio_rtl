import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';
import App from '../../App';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve inserir dois comentarios',()=>{

        const {debug} = render(<App/>)
        
        fireEvent.change(screen.getByTestId('campo-text'),{
            target:{
                value:'legal sua miniatura do batmovel'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-text'),{
            target:{
                value:'legal seu batmovel preto'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        debug()
        expect(screen.getByText('legal sua miniatura do batmovel')).toBeInTheDocument()
        expect(screen.getByText('legal seu batmovel preto')).toBeInTheDocument()
    });
});