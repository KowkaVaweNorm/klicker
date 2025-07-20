type AnyFunction = (...args: any[]) => void;

/**
 * Возвращает debounced-функцию, которая будет откладывать вызов переданной функции
 * до тех пор, пока не пройдёт указанное количество миллисекунд без повторных вызовов.
 *
 * @param fn - Функция, которую нужно debounce'ить
 * @param delay - Задержка в миллисекундах
 */
export function debounce<T extends AnyFunction>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
