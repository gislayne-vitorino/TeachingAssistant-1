import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
   alunos: Aluno[] = [];

    cadastrar(aluno: Aluno): Aluno {
     var result = null;
     if (this.cpfNaoCadastrado(aluno.cpf) && this.loginNaoCadastrado(aluno.login)){
       result = new Aluno();
       result.copyFrom(aluno);
       this.alunos.push(result);
     } 
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.alunos.find(a => a.cpf == cpf);
   }
    loginNaoCadastrado(login: string): boolean {
      return !this.alunos.find(a => a.login == login);
   }
    atualizar(aluno: Aluno): Aluno {
     var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
     if (result) result.copyFrom(aluno);
     return result;
   }
remover(cpf: string): boolean {
    var result = this.alunos.findIndex(a => a.cpf == cpf)!;

    if (result == -1) return false
    this.alunos.splice(result, 1)
    return true;
  }
    getAlunos(): Aluno[] {
     return this.alunos;
   }
}