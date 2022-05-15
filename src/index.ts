//NodeJS 패키지 중 하나
import crypto from "crypto";

interface BlockShape {
  // 해쉬값
  hash: string;
  // 이전 해쉬값
  prevHash: string;
  // 블록의 위치를 표시해주는 숫자
  height: number;
  // 블록이 보호할 데이터
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  // 이전 해쉬값을 받을 컨스트럭쳐
  // 블록의 해쉬값은 prevHash, height, data 값을 이용해서 계산된다. 해쉬는 해당 블록의 고유 서명과 같은 것이다.
  // 해쉬의 값은 결정론적이다. 어떤 입력값의 해쉬는 언제나 같은 결과물이 나온다. 즉, 데이터가 변하지 않으면 해쉬값도 변하지 않는다.
  constructor(public prevHash: string, public height: number, public data: string) {
    // 해쉬 변수 초기화 (이니셜라이저)
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  // static 메소드는 객체지향에서 많이 사용된다. 클래스 인스턴스가 없어도 부를 수 있는 메소드이다.
  static calculateHash(prevHash: string, height: number, data: string) {
    // 여기서 해쉬값을 만들기 위해 crypto 사용
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  // addBlock에서 prevHash가 필요하므로 이전 해쉬값을 가져오는 메소드 생성
  private getPrevHash() {
    // 첫 번째 해쉬가 없으므로 "" return
    if (this.blocks.length === 0) return "";
    // 위에 해당하지 않으면 마지막 블록의 해쉬값을 return
    return this.blocks[this.blocks.length - 1].hash;
  }
  // 새로운 블록 생성
  public addBlock(data: string) {
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    // 새로 생성한 블록을 blocks 배열에 넣어준다.
    this.blocks.push(newBlock);
  }
  // 블록에 접근할 수 있는 메소드
  public getBlocks() {
    // 이 값은 private이지만 블록체인 배열 자체를 return하므로 누구나 접근할 수 있어 보안에 취약하다. 완전히 새로운 배열을 return 하자.
    // return this.blocks;
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

// getBlocks에서 this.blocks를 return하면 이런 동작이 가능해진다.
blockchain.getBlocks().push(new Block("xxxxxxx", 1111111, "HACKEEEEEEEEEDDDDDDD"));

blockchain.addBlock("Fourth one");

console.log(blockchain.getBlocks());
