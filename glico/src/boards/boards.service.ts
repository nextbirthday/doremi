/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  //private boards: Board[] = [{ id: 'initial post', title: 'first title', description: '一番', status: BoardStatus.PUBLIC }];
  private boards: Board[] = [];

  getAllBoards() {
    console.log('boards', this.boards);
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {

    // const title = createBoardDto.title; - 아래와 같지만 아래와 같은 코드를 사용하는 것이 좋다.

    const { title, description } = createBoardDto

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);

    return board;
  }

  /* 게시글 단 건 가져오기 */
  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id)

    if (!found) { throw new NotFoundException(`Can't find Board with id ${id}`) }

    return found
  }

  /* 게시글 삭제 */
  deleteBoard(id: string): void {
    const found = this.getBoardById(id)
    this.boards = this.boards.filter((board) => board.id! == found.id)
  }

  /* 공개, 비공개 상태 업데이트 */
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id)
    board.status = status
    return board
  }

}
