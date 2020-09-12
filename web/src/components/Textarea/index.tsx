import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={ name }>{ label }</label>
            <textarea id={ name } { ...rest }/>
        </div>
    )
}

export default Textarea

/*
    { TextareaHTMLAttributes }
    extends TextareaHTMLAttributes<HTMLTextAreaElement>
    ...rest
    { ...rest }

Faz como que o Textarea possa receber todos os atributos que um Textarea tradicional do html já receberia por padrão

*/