import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  /* boardsService: BoardsService; */
  /*  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  } */
  /* 아래 코드는 TS의 도움을 받아서 가능하다. 자바스크립트에서는 private와 같은 접근 제한자(Access modifier)를 사용할 수 없지만 TS에서는 사용가능하다. */
  /* 접근 제한자를 생성자 파라미터에 선언하면 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 */
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    /* ()함수 처리 누락 주의! */
    return this.boardsService.getAllBoards();
  }

  /* @Body() body를 선언하면 request에서 보내온 값을 가져올 수 있다. */

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description,
  ): Board {
    console.log('title', title);
    console.log('description', description);
    return this.boardsService.createBoard(title, description);
  }
}
