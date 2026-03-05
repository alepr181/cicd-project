import { describe, it, expect } from 'vitest';
import { validateItem, formatItem } from './logic.js';

describe('Pruebas Unitarias de la Lista de Compra', () => {
    
    it('Debe validar correctamente un texto válido (entre 2 y 20 caracteres)', () => {
        expect(validateItem('Pan')).toBe(true);
        expect(validateItem('Leche Desnatada')).toBe(true);
    });

    it('Debe rechazar textos vacíos o de un solo carácter', () => {
        expect(validateItem('')).toBe(false);
        expect(validateItem('A')).toBe(false);
    });

    it('Debe rechazar textos demasiado largos (>20 caracteres)', () => {
        expect(validateItem('Esta es una frase demasiado larga para la lista')).toBe(false);
    });

    it('Debe limpiar espacios y convertir a mayúsculas', () => {
        expect(formatItem('  manzanas  ')).toBe('MANZANAS');
        expect(formatItem('peras')).toBe('PERAS');
    });
});