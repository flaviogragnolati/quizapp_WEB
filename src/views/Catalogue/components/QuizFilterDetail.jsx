import React from 'react';
import ComboFilter from './ComboFilter';
import { useSelector } from 'react-redux';
import { quizTagsSelector, quizzesSelector } from 'utils/selectors';
import { formatStateToOptions } from 'utils/helpers';

function SchoolFilterDetail({ setFilter }) {
  const quizTags = useSelector(quizTagsSelector);
  const quizzes = useSelector(quizzesSelector);
  const quizTagsOptions = formatStateToOptions(quizTags);
  const quizzesOptions = formatStateToOptions(quizzes);
  return (
    <>
      <ComboFilter
        label="Quiz Name"
        placeholder="Nombre del Quiz"
        name="quiz"
        options={quizzesOptions || [{ id: '', label: 'NO DATA' }]}
        setFilter={setFilter}
      />
      <br></br>
      <ComboFilter
        label="Quiz Tags"
        placeholder="Tags del Quiz"
        name="tag"
        options={quizTagsOptions || [{ id: '', label: 'NO DATA' }]}
        setFilter={setFilter}
      />
    </>
  );
}

export default SchoolFilterDetail;

const fakeQuizzes = [
  { label: 'Matematica Inicial' },
  { label: 'Quimica 2nd Cuatrimetres' },
  { label: 'Born-Habber' },
  { label: 'Qumica General Practica' },
  { label: 'Administracion 1er parcial' },
  { label: 'Fisica 2ndo parcial' },
  { label: 'Estudio de electricidad' },
  { label: 'Introduccion a la cuantica' },
  { label: 'Practica Qca. Organica I' },
  { label: 'Practica Qca. Organica II' },
  { label: 'Ejercicio de Fisicoquimica' },
  { label: 'Integracion 2nda parte' },
  { label: 'Integracion 3era parte' },
  { label: 'Practica Balances de Materia' },
  { label: 'Practica Balances No estacionarios' },
  { label: 'Estadistica examen' },
];

const fakeTagQuizzes = [
  { label: 'Derivadas I' },
  { label: 'Integracion por Partes' },
  { label: 'Estructura Atomica' },
  { label: 'Enlaces Moleculares' },
  { label: 'Transporte de cantidad de movimiento' },
  { label: 'Leyes de Newton' },
  { label: 'Electrodinamica' },
  { label: 'Numeros Cuanticos' },
  { label: 'Reacciones SN1 y SN2' },
  { label: 'Ecuaciones de Maxwell' },
  { label: 'Reaccion Fischer-Tropsch' },
  { label: 'Hidrodinamica de cuerpos sumergidos' },
  { label: 'Estudio de Hawthorne' },
  { label: 'Leyes de Fick' },
  { label: 'Cromodinamica Cuantica' },
  { label: 'Resistencia de Materiales' },
];
