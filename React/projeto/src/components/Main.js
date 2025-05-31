import React, {Component} from "react";

import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";
import './Main.css'

export default class Main extends Component {
    state = {
        novaTarefa: "",
        tarefas: [
            "Fazer café",
            "Beber água",
            "Estudar front-end"
        ]
    }

    handleTarefa = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        })
    }

    handeSubmit = (e) => {
        e.preventDefault();

        const {novaTarefa, tarefas} = this.state;
        if (!novaTarefa.trim()) return;

        this.setState({
            tarefas: [...tarefas, novaTarefa],
            novaTarefa: "",
        });
    }

    render(){
        const { novaTarefa, tarefas } = this.state;

        return(
            <div className="main">
                <h1>Lista de Tarefas {novaTarefa}</h1>
                <form onSubmit={this.handeSubmit} className="form">
                    <label>Tarefa</label>
                    <input 
                        type="text" 
                        onChange={this.handleTarefa} 
                        value={novaTarefa}
                    >
                    </input>
                    <button type="submit"><FaPlus /></button>
                </form>

                <ul className="tarefas">
                    {tarefas.map(tarefa => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit className="edit" />
                                <FaWindowClose className="delete"/>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};