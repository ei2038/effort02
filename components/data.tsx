import React from 'react';
import Article from './Article';
import Link from './Link';
import Strike from './Strike';

type Data = {
  id: number;
  name: string;
  content: React.ReactNode;
};

const data: Data[] = [
  {
    id: 0,
    name: 'TOP',
    content: (
      <>
        <Article
          //
          title="GohanRPG制作チーム"
          key={'gohan'}
          content={
            <p>
              このサイトは、努力の跡2022の
              <Link
                href="https://hk-pg.github.io/gohanRPG/"
                target="_blank"
                rel="noreferrer"
                fontSize="2em"
              >
                GohanRPG
              </Link>
              制作チームのサイトです。
              <br />
              各メンバーの学籍番号をクリックすると、それぞれの感想等がみれます。
              <br />
              なお、このサイトはReact.jsを用いて作成しています。
              <br />
              ブラウザの設定でJavaScriptが無効になっている場合、内容が正しく表示されない可能性があります。
            </p>
          }
        />
      </>
    ),
  },
  {
    id: 1,
    name: 'ei2009',
    content: (
      <>
        <Article
          //
          title="あいさつ"
          key={'ei2009'}
          content={
            <div>
              <p>ei2009こと河合拓人です。</p>
              <p>
                そんなことはどうでもいいので芸名の増田拓斗だけでも覚えて帰ってください。
              </p>
            </div>
          }
        />
        <Article
          //
          title="1年の振り返り"
          key={'ei2009'}
          content={
            <div>
              <p>前半は、1年生の授業に重点を置いて取り組んだ。</p>
              <p>
                しかし、そこに時間を割きすぎて、本来2年生で取り組むべきである自分の実力向上への取り組みが疎かになってしまった。
              </p>
              <p>
                また、自分の実力不足が授業側にも悪影響を及ぼしてしまっていたようにも感じる。
              </p>
              <p>
                その点1年生には迷惑をかけてしまったが、それでも授業についてきてくれたことに感謝したい。
              </p>
              <p>
                私達の世代から、前の代よりも実力が劣り始めてしまったことは明らかであるため、
              </p>
              <p>
                来年度以降はその遅れを少しでも取り戻すべく、後輩の教育と自分自身の実力の向上を両輪で行っていきたい。
              </p>
              <p>
                いよいよ最上級学年となるが、正直それに見合う実力がついているとは到底思えない。
              </p>
              <p>
                多くの問題に取り組み、コンテストで少しでも結果が残せるよ努力する必要があると感じた。
              </p>
            </div>
          }
        />
        <Article
          //
          title="感想"
          key={'ei2009'}
          content={
            <div>
              <p>C系以外の言語で、本格的な開発に関わるのは今回が初めてだった。</p>
              <p>
                そのため、JSでのコーディングに慣れている他の3人には、仕事の遅れでかなり迷惑をかけてしまった。
              </p>
              <p>
                当たり前のことではあるが、「自分で調べる」ということの重要性について痛感した。
              </p>
              <p>
                目的のことを見つけ出す、「調べる力」をもっと身につける必要があると感じた。
              </p>
              <p>その練習のためにも、個人開発にも自主的に取り組んでみたい。</p>
              <p>
                今回の参加で、「新しい言語を学ぶ」ということに触れられたのは、かなり貴重な経験になった。
              </p>
              <p>
                また、大筋のストーリーと主要イベントのテキストも担当したが、その仕事は普段の趣味を活かして比較的早く完了させることができた。
              </p>
            </div>
          }
        />
      </>
    ),
  },
  {
    id: 2,
    name: 'ei2030',
    content: (
      <>
        <div
          style={{
            lineHeight: '200%',
          }}
        >
          <Article
            title="あいさつ"
            key={'ei2030'}
            content={
              <p>
                どうも、今年の努力の跡は思い切ってグループで参加してみましたei2030こと深田大貴です。
                <br />
                <Strike isDouble={true}>
                  そんなことはどうでもいいので芸名の増田拓斗だけでも覚えて帰ってください。
                </Strike>
                <br />
                2年生となった今年は1年の時と比べて忙しく、なかなか自主学習に時間を割けなかったので、
                <br />
                今回努力の跡でこのような制作ができてとても嬉しく思っています。
                <br />
                去年同様今年の&quot;努力の跡&quot;をだらだら書いていくのでだらだら読んでください。
              </p>
            }
          />
          <Article
            title="去年からの進歩"
            key={'ei2030'}
            content={
              <p>
                実は私、去年もJavaScriptを使って色々作っていました。
                <br />
                代表作(?)を挙げると、
                <ul>
                  <Link
                    href="https://netarisu-score.web.app/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    ネタリス(テトリスもどき)やシューティングゲーム(しょぼい)
                  </Link>
                  <br />
                  <Link
                    href="https://shooting2-c68c2.web.app/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    シューティングゲーム2(けっこうがんばった)
                  </Link>
                  <br />
                </ul>
                こんな感じです。
                <br />
                この内２つ目のシューティング2は、去年の努力の跡の時点では複数のJSファイル(1000行近い)をhtmlに直接順番に読み込ませることで作っていました。
                しかしこれではあまりにも管理がしにくいので、今年の初めにプロジェクト全体をTypeScript化＆Webpackで管理するように変更しました。
                <br />
                Webpackの設定は複雑だしTypeScriptの静的型付けは厳しいしで散々苦労しましたが、これのお陰で今の私があります。
              </p>
            }
          />
          <Article
            title="NeoVimとの出会い"
            key={'ei2030'}
            content={
              <div>
                <p>
                  唐突ですが、皆さんはVimというエディタをご存知でしょうか?
                  <br />
                  Unix互換のOSなら大抵の環境で「vi」もしくは「vim」で起動することができる、ターミナル上で動作するとても軽くて編集力に優れたエディタです。
                  <br />
                  このVim君、確かに編集力はピカイチなのですが、起動してもらえば分かる通り、そのままでは現代のモダンなエディタ(vscodeとか)には機能面では全く勝ち目がありません。
                  <br />
                  ですが、長い歴史を持つ故に愛用する人が多いのも事実です。そこで世界のどっかの頭のいい人達は、
                  <br />
                  「vscodeでvimのキーバインドを使えるようにしよう！」と思ったらしく、
                  <br />
                  vscodeにvimの拡張機能を作ってしましました。
                </p>
                <p>
                  私も１年の頃はこの拡張のお世話になっていました。しかし、生の.vimrc(設定ファイル)が読み込めない等の欠点もありました。
                  <br />
                  そんな時です、
                  <Link
                    href="https://zenn.dev/yutakatay/articles/vscode-neovim"
                    target={'_blank'}
                  >
                    とある記事
                  </Link>
                  に出会ったのは。
                  <br />
                  なんとvscodeで設定ファイルを読み込み可能で、更にプラグインまで動作してしまう「VSCODE
                  NeoVim」なる拡張があるというではないか。
                  <br />
                  <Strike>裸になって踊り狂いました</Strike>
                  すぐに食いつきました。
                  <br />
                  これがNeoVimとの出逢いでした。
                  <br />
                  そこから今に至るまで
                  <Link href="https://github.com/neoclide/coc.nvim" target={'_blank'}>
                    こんなもの
                  </Link>
                  まで知ってしまい、今では私のターミナル(NeoVim)はvscodeと同程度もしくはそれ以上のIDEに進化しています。
                </p>
                <Article
                  title="RPG制作の道のり"
                  key={'ei2030'}
                  content={
                    <div>
                      <p>
                        実はRPGを作ってみたいという思いは去年からありました。
                        <br />
                        しかし、RPGには大量のキャラクターやストーリー、バトルシステムの他にマップ上の処理等とにかく考えることが沢山ありすぎて
                        一年前の私一人ではどうすることもできず夢物語に終わりました。
                        <br />
                        それから１年が経ち、今年こそはRPGを作ろうと思い、早めに計画を立てていたのですが、やるべきことを列挙していく内に一人ではどうにも無理があると察しました。
                        <br />
                        人を集めるにしても、皆努力の跡の計画を立ててしまってからでは遅いし、何より話し合いや個人の学習期間が必要になることは目に見えていたので
                        修学旅行前に声掛けをスタートしました。
                        そこで最初は学習コストの低減を重視し同じ言語を使えてRPGに興味のありそうな人達に声をかけていると、最終的に総勢5人のチームが出来上がりました。
                      </p>
                      <p>
                        今回の制作では、複数人での開発ということもあり生のJavaScriptではなくTypeScriptを使い、
                        <br />
                        その関係上モジュールバンドラーであるWebpackを利用しました。
                        <br />
                        幸いにもこの学校の環境はLinux(2022/03/30現在CentOS8)なので、簡単にnode.jsの環境構築が可能です。
                        メンバーには頑張って(大体)自力で環境構築してもらいました。
                        <br />
                        ソースコードは
                        <Link href="https://github.com/hk-pG/gohanRPG" target={'_blank'}>
                          github
                        </Link>
                        に公開しているので、node環境さえあれば動かせるし、改造することも可能です。
                      </p>
                    </div>
                  }
                />
              </div>
            }
          />
        </div>
      </>
    ),
  },
  {
    id: 3,
    name: 'ei2032',
    content: (
      <Article
        //
        title="タイトル2"
        key={'ei2032'}
        content={
          <div>
            <p>内容2</p>
          </div>
        }
      />
    ),
  },
  {
    id: 4,
    name: 'ei2036',
    content: (
      <Article
        //
        title="帰りたい"
        key={'ei2036'}
        content={
          <div>
            <p>
              どうも、今回の主役ことei2036の森田幸磨です。
              <br />
              私はすごいがんばりました。 あっ、今本人が帰りました。
            </p>
          </div>
        }
      />
    ),
  },
  {
    id: 5,
    name: 'ei2037',
    content: (
      <Article
        //
        title="タイトル4"
        key={'ei2032'}
        content={
          <div>
            <p>内容4</p>
          </div>
        }
      />
    ),
  },
];

export default data;
