const examData = [
    {
        id: 1,
        topic: "Formation / Acceptance by Conduct",
        fp: "A developer, needing a water well on one of his projects, met several times about the matter with a well driller. Subsequently, the driller sent the developer an unsigned typewritten form captioned 'WELL DRILLING PROPOSAL' and stating various terms the two had discussed but not agreed upon, including a 'proposed price of $5,000.' The form concluded, 'This proposal will not become a contract until signed by you [the developer] and then returned to and signed by me [the driller].' The developer signed the form and returned it to the driller, who neglected to sign it but promptly began drilling the well at the proposed site on the developer's project. After drilling for two days, the driller told the developer during one of the developer's daily visits that he would not finish unless the developer would agree to pay twice the price recited in the written proposal. The developer refused, the driller quit, and the developer hired a substitute driller to drill the well to completion for a price of $7,500.",
        q: "In an action by the developer against the driller for damages, which of the following is the probable decision?",
        opts: [
            "The developer wins, because his signing of the driller's form constituted an acceptance of an offer by the driller.",
            "The developer wins, because the driller's commencement of performance constituted an acceptance by the driller of an offer by the developer and an implied promise by the driller to complete the well.",
            "The driller wins, because he never signed the proposal as required by its terms.",
            "The driller wins, because his commencement of performance merely prevented the developer from revoking his offer, made on a form supplied by the driller, and did not obligate the driller to complete the well."
        ],
        ans: 1,
        exp: "Although the driller's form stated that it would not become a contract until signed by both parties, the driller's subsequent conduct of promptly commencing the performance waived this signature requirement[cite: 13]. When the developer signed and returned the form, it constituted an offer[cite: 13]. By beginning to drill the well without signing, the driller accepted the developer's offer by performance and implicitly promised to complete the well, making the driller liable for breach when he quit[cite: 13]."
    },
    {
        id: 2,
        topic: "Termination / UCC Firm Offer Time Limit",
        fp: "On December 15, a lawyer received from a stationer an offer consisting of its catalog and a signed letter stating, 'We will supply you with as many of the items in the enclosed catalog as you order during the next calendar year. We assure you that this offer and the prices in the catalog will remain firm throughout the coming year.' On January 15, having at that time received no reply from the lawyer, the stationer notified the lawyer that, effective February 1, it was increasing the prices of certain specified items in its catalog.",
        q: "Is the price increase effective with respect to catalog orders the stationer receives from the lawyer during the month of February?",
        opts: [
            "No, because the stationer's original offer, including the price term, became irrevocable under the doctrine of promissory estoppel.",
            "No, because the stationer is a merchant with respect to office supplies; and its original offer, including the price term, was irrevocable throughout the month of February.",
            "Yes, because the stationer received no consideration to support its assurance that it would not increase prices.",
            "Yes, because the period for which the stationer gave assurance that it would not raise prices was longer than three months."
        ],
        ans: 3,
        exp: "Under UCC § 2-205, a merchant's signed, written offer to buy or sell goods that gives assurance it will be held open is an irrevocable 'firm offer' without consideration[cite: 13]. However, the statute explicitly mandates that no such firm offer can remain irrevocable for a period exceeding three months (90 days)[cite: 13]. Because the stationer's promise attempted to hold the price firm for an entire calendar year, the period of irrevocability expired after 90 days (around March 15), making the price increase effective when enacted for February[cite: 13]."
    },
    {
        id: 3,
        topic: "Formation / UCC Firm Offer (Merchant Requirement)",
        fp: "On November 1, Debbit, an accountant, and Barrister, a lawyer, contracted for the sale by Debbit to Barrister of the law books Debbit had inherited from his father. Barrister agreed to pay the purchase price of $10,000 when Debbit delivered the books on December 1. On November 10, Barrister received a signed letter from Debbit that stated: 'I have decided to dispose of the book stacks containing the law books you have already purchased. If you want the stacks, I will deliver them to you along with the books on December 1 at no additional cost to you. Let me know before November 15 whether you want them. I will not sell them to anyone else before then.' Debbit was not a merchant with respect to either law books or book stacks. On November 12 Debbit told Barrister that he had decided not to part with the stacks.",
        q: "Will this communication operate as a legally effective revocation of his offer to deliver the stacks?",
        opts: [
            "Yes, because Barrister had a pre-existing obligation to pay $10,000 for the law books.",
            "Yes, because Debbit was not a merchant with respect to book stacks.",
            "No, because Debbit had given a signed assurance that the offer would be held open until November 15.",
            "No, because by delaying his acceptance until November 14, Barrister detrimentally relied on Debbit's promise not to sell the stacks to anyone else in the meantime."
        ],
        ans: 1,
        exp: "Under the UCC, a firm offer is only created if the offeror is a 'merchant' with respect to the goods involved[cite: 13]. Because Debbit is an accountant and is not a merchant dealing in book stacks, UCC § 2-205 does not apply[cite: 13]. Without independent consideration to form a binding option contract at common law, Debbit's promise to hold the offer open was gratuitous and freely revocable at any time prior to acceptance[cite: 13]."
    },
    {
        id: 4,
        topic: "Formation / Irrevocable Offer (Beginning Performance)",
        fp: "While waiting in line to open an account with a bank, a customer read a poster on the bank's wall that said, 'New Customers! $25 FOR 5 MINUTES. If you stand in line for more than five minutes, we will pay you $25! We like happy customers! (This offer may be withdrawn at any time.)' The customer started timing his wait and just as five minutes was about to pass, the bank manager tore the poster down and announced, 'The $25 stand-in-line promotion is over.' The customer waited in line for 10 more minutes before being served.",
        q: "In the customer's action against the bank for $25, will the customer prevail?",
        opts: [
            "No, because the bank withdrew its offer before the customer completed the requested performance.",
            "No, because the bank's statement was a nonbinding gift promise.",
            "Yes, because the bank could not revoke its offer once the customer had commenced performance.",
            "Yes, because the customer's presence in line served as notice to the bank that he had accepted."
        ],
        ans: 2,
        exp: "An offer for a unilateral contract invites acceptance only through the completion of the requested performance[cite: 13]. However, once the offeree begins or tenders the commencement of the requested performance, an option contract is created under Restatement (Second) of Contracts § 45, making the offer temporarily irrevocable while the offeree completes performance within the allowed time[cite: 13]. Because the customer started waiting in line, the bank's attempted revocation was legally ineffective[cite: 13]."
    },
    {
        id: 5,
        topic: "Consideration / Bargained-For Exchange (Mixed Motive)",
        fp: "Rollem, an automobile retailer, had an adult daughter, Betsy, who needed a car in her employment but had only $3,000 with which to buy one. Rollem wrote to her, 'Give me your $3,000 and I'll give you the car on our lot that we have been using as a demonstrator.' Betsy thanked her father and paid him the $3,000. As both Rollem and Betsy knew, the demonstrator was reasonably worth $10,000. After Betsy had paid the $3,000, but before the car had been delivered to her, one of Rollem's sales staff sold and delivered the same car to a customer for $10,000. Neither the salesperson nor the customer was aware of the transaction between Rollem and Betsy.",
        q: "Does Betsy, after rejecting a tendered return of the $3,000 by Rollem, have an action against him for breach of contract?",
        opts: [
            "Yes, because Rollem's promise was supported by bargained-for consideration.",
            "Yes, because Rollem's promise was supported by the moral obligation a father owes his child as to the necessities of modern life.",
            "No, because the payment of $3,000 was inadequate consideration to support Rollem's promise.",
            "No, because the salesperson's delivery of the car to the customer made it impossible for Rollem to perform."
        ],
        ans: 0,
        exp: "Consideration requires a bargained-for exchange[cite: 13]. Even if a transaction represents a mixture of a bargain and a gift (selling a $10,000 car for $3,000), the adequacy of consideration is not questioned by courts as long as a genuine bargain was struck[cite: 13]. Because Rollem bargained for and received Betsy's payment of $3,000 in exchange for the car, valid consideration was present, forming an enforceable contract[cite: 13]."
    },
    {
        id: 6,
        topic: "Consideration / Motives Irrelevant",
        fp: "A small-business owner encourages 'wellness' on the part of his employees and supports various physical-fitness programs to that end. Learning that one of his employees was a dedicated jogger, the business owner promised to pay the jogger a special award of $100 if she could and would run one mile in less than six minutes on the following Saturday. The jogger thanked him, and did in fact run a mile in less than six minutes on the day specified. Shortly thereafter, however, the business owner discovered that for more than a year the jogger had been running at least one mile in less than six minutes every day as a part of her personal fitness program. He refused to pay the $100.",
        q: "In an action by the jogger against the business owner for breach of contract, which of the following best summarizes the probable decision of the court?",
        opts: [
            "The business owner wins, because it is a compelling inference that the business owner's promise did not induce the jogger to run the specified mile.",
            "The business owner wins, because the jogger's running of the specified mile was beneficial, not detrimental, to her in any event.",
            "The jogger wins, because running a mile in less than six minutes is a significantly demanding enterprise.",
            "The jogger wins, because she ran the specified mile as requested, and her motives for doing so are irrelevant."
        ],
        ans: 3,
        exp: "To satisfy the consideration requirement, an act must be bargained for and given in exchange for the promise[cite: 13]. The fact that the promisee might have performed the act anyway for personal reasons or habit does not invalidate consideration, as the promisor requested the act and received the exact performance bargained for[cite: 13]. The offeree's motives for performing are entirely legally irrelevant[cite: 13]."
    },
    {
        id: 7,
        topic: "Consideration / Pre-existing Duty Rule (Modification)",
        fp: "A landowner and a contractor entered into a written contract under which the contractor agreed to build a building and pave an adjacent sidewalk for the landowner at a price of $200,000. Later, while construction was proceeding, the landowner and the contractor entered into an oral modification under which the contractor was not obligated to pave the sidewalk, but still would be entitled to $200,000 upon completion. The contractor completed the building. The landowner, after discussions with his landscaper, demanded that the contractor pave the adjacent sidewalk. The contractor refused.",
        q: "Has the contractor breached the contract?",
        opts: [
            "No, because the oral modification was in good faith and therefore enforceable.",
            "Yes, because a discharge of a contractual obligation must be in writing.",
            "Yes, because the parol evidence rule bars proof of the oral modification.",
            "Yes, because there was no consideration for the discharge of the contractor's duty to pave the sidewalk."
        ],
        ans: 3,
        exp: "Under the common law pre-existing duty rule, a modification that forgives a duty or reduces obligations without providing new, independent consideration is unenforceable[cite: 13]. Because the contractor gave up nothing new and was merely excused from performing a part of what he was already contractually obligated to do for the exact same total price, the modification lacked consideration, leaving the original contract intact and making the contractor's refusal a breach[cite: 13]."
    },
    {
        id: 8,
        topic: "Consideration / Pre-existing Duty Rule (Emergency Services)",
        fp: "An accountant entered into a contract with a painter by the terms of which the painter was to paint the accountant's office for $1,000 and was required to do all of the work over the following weekend so as to avoid disruption of the accountant's business. If the painter had started to paint on the following Saturday morning, he could have finished before Sunday evening. However, he stayed home that Saturday morning to watch the final game of the World Series on TV, and did not start to paint until Saturday afternoon. By late Saturday afternoon, the painter realized that he had underestimated the time it would take to finish the job if he continued to work alone. The painter phoned the accountant at her home and accurately informed her that it was impossible to finish the work over the weekend unless he hired a helper. He also stated that to do so would require an additional charge of $200 for the work. The accountant told the painter that she apparently had no choice but to pay 'whatever it takes' to get the work done as scheduled. The painter hired a helper to help finish the painting and paid the helper $200. The accountant has offered to pay the painter $1,000. The painter is demanding $1,200.",
        q: "How much is the painter likely to recover?",
        opts: [
            "$1,000 only, because the accountant received no consideration for her promise to pay the additional sum.",
            "$1,000 only, because the accountant's promise to pay 'whatever it takes' is too uncertain to be enforceable.",
            "$1,200, in order to prevent the accountant's unjust enrichment.",
            "$1,200, because the impossibility of the painter's completing the work alone discharged the original contract and a new contract was formed."
        ],
        ans: 0,
        exp: "Under the pre-existing duty rule, a promise to perform what one is already legally obligated to do under an existing contract is not valid consideration[cite: 13]. Because the painter's delay was caused by his own procrastination (watching television) rather than an unforeseeable external emergency, his subsequent promise to finish the work only if paid an extra $200 lacked valid consideration[cite: 13]. Thus, the accountant's promise to pay the extra amount is unenforceable, limiting the painter to his original contract price of $1,000[cite: 13]."
    },
    {
        id: 9,
        topic: "Terms / Modification (Unanticipated Circumstances)",
        fp: "A contractor contracted with a warehouse owner to construct for $500,000 a warehouse and an access driveway at highway level on the owner's property. Shortly after commencing work on the driveway, which required for the specified level some excavation and removal of surface material, the contractor unexpectedly encountered a large mass of solid rock. The contractor informed the owner (accurately) that because of the rock the driveway as specified would cost at least $20,000 more than figured, and demanded for that reason a total contract price of $520,000. Since the owner was expecting warehousing customers immediately after the agreed completion date, he signed a writing promising to pay the additional $20,000. Following timely completion of the warehouse and driveway, which conformed to the contract in all respects, the owner refused to pay the contractor more than $500,000.",
        q: "What is the maximum amount to which the contractor is entitled?",
        opts: [
            "$500,000, because there was no consideration for the owner's promise to pay the additional $20,000.",
            "$500,000, because the owner's promise to pay the additional $20,000 was exacted under duress.",
            "$520,000, because the modification was fair and was made in the light of circumstances not anticipated by the parties when the original contract was made.",
            "$520,000, provided that the reasonable value of the contractor's total performance was that much or more."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Contracts § 89, a modification of an executory contract needs no consideration to be binding if it is fair and equitable in view of circumstances not anticipated by the parties when the contract was made[cite: 13]. Encountering massive solid rock during excavation was a completely unforeseen site condition[cite: 13]. The owner's written promise to pay an extra $20,000 to cover this unanticipated difficulty is fully binding and enforceable[cite: 13]."
    },
    {
        id: 10,
        topic: "Consideration / Pre-existing Duty Rule (Third-Party Exception)",
        fp: "A burglar stole Collecta's impressionist painting valued at $400,000. Collecta, who had insured the painting for $300,000 with Artistic Insurance Co., promised to pay $25,000 to Snoop, a full-time investigator for Artistic, if he effected the return of the painting to her in good condition. By company rules, Artistic permits its investigators to accept and retain rewards from policyholders for the recovery of insured property. Snoop, by long and skillful detective work, recovered the picture and returned it undamaged to Collecta.",
        q: "If Collecta refuses to pay Snoop anything, and he sues her for $25,000, what is the probable result under the prevailing modern rule?",
        opts: [
            "Collecta wins, because Snoop owed Artistic a pre-existing duty to recover the picture if possible.",
            "Collecta wins, because Artistic, Snoop's employer, had a pre-existing duty to return the recovered painting to Collecta.",
            "Snoop wins, because Collecta will benefit more from return of the $400,000 painting than from receiving the $300,000 policy proceeds.",
            "Snoop wins, because the pre-existing duty rule does not apply if the promisee's (Snoop's) duty was owed to a third person."
        ],
        ans: 3,
        exp: "Under the prevailing modern rule, the pre-existing duty rule does not apply if the pre-existing duty is owed to a third person rather than to the promisor[cite: 13]. Although Snoop owed a duty to his employer (Artistic Insurance) to investigate, he owed no contractual duty directly to the promisor (Collecta)[cite: 13]. Therefore, his performance served as valid consideration for Collecta's promise to pay the reward[cite: 13]."
    },
    {
        id: 11,
        topic: "Consideration / Accord and Satisfaction",
        fp: "In a written contract, an architect agreed to draw up the plans for and to supervise construction of a client's new house. In return, the client agreed to pay the architect a fee of $10,000 to be paid upon the house's completion. After completion, the client claimed erroneously but in good faith that the architect's plans were defective. The client orally offered to pay the architect $7,500 in full settlement of the claim for the fee. The architect orally accepted that offer despite the fact that the reasonable value of his services was in fact $10,000. The client paid the architect $7,500 pursuant to their agreement. The architect subsequently sued the client for the remaining $2,500. In a preliminary finding, the trier of fact found that there were no defects in the architect's plans.",
        q: "Will the architect be likely to prevail in his action against the client for $2,500?",
        opts: [
            "Yes, because payment of $7,500 cannot furnish consideration for the architect's promise to surrender his claim.",
            "Yes, because the oral agreement to modify the written contract is not enforceable.",
            "No, because the architect's promise to accept $7,500 became binding when the client made the payment.",
            "No, because the architect's acceptance of partial payment constituted a novation."
        ],
        ans: 2,
        exp: "An accord is an agreement to accept a different performance in complete settlement of an existing disputed obligation[cite: 13]. When a debt or claim is subject to a good-faith dispute, the compromise of that claim provides sufficient consideration to support the agreement, even if the claim ultimately proves to be legally invalid[cite: 13]. Performance of the accord (satisfaction) discharges the original debt[cite: 13]. Because the client disputed the fee in good faith, the accord and satisfaction is valid, barring further recovery[cite: 13]."
    },
    {
        id: 12,
        topic: "Terms / Accord and Satisfaction (Check Cashing)",
        fp: "A client consulted a lawyer about handling the sale of the client's building, and asked the lawyer what her legal fee would be. The lawyer replied that her usual charge was $100 per hour, and estimated that the legal work on behalf of the client would cost about $5,000 at that rate. The client said, 'Okay; let's proceed with it,' and the lawyer timely and successfully completed the work. Because of unexpected title problems, the lawyer reasonably spent 75 hours on the matter and shortly thereafter mailed the client a bill for $7,500, with a letter itemizing the work performed and time spent. The client responded by a letter expressing his good-faith belief that the lawyer had agreed to a total fee of no more than $5,000. The client enclosed a check in the amount of $5,000 payable to the lawyer and conspicuously marked, 'Payment in full for legal services in connection with the sale of [the client's] building.' Despite reading the 'Payment in full...' language, the lawyer, without any notation of protest or reservation of rights, endorsed and deposited the check to her bank account. The check was duly paid by the client's bank. A few days later, the lawyer unsuccessfully demanded payment from the client of the $2,500 difference between the amount of her bill and the check, and now sues the client for that difference.",
        q: "What, if anything, can the lawyer recover from the client?",
        opts: [
            "Nothing, because the risk of unexpected title problems in a real-property transaction is properly allocable to the seller's attorney and thus to the lawyer in this case.",
            "Nothing, because the amount of the lawyer's fee was disputed in good faith by the client, and the lawyer impliedly agreed to an accord and satisfaction.",
            "$2,500, because the client agreed to an hourly rate for as many hours as the work reasonably required, and the sum of $5,000 was merely an estimate.",
            "The reasonable value of the lawyer's services in excess of $5,000, if any, because there was no specific agreement on the total amount of the lawyer's fee."
        ],
        ans: 1,
        exp: "Under UCC § 3-311 (and common law principles governing commercial transactions), when a claim is subject to a good-faith dispute, the cashing of a check conspicuously marked 'Payment in Full' constitutes an accord and satisfaction[cite: 13]. Because the client disputed the fee in good faith and tendered the marked check, the lawyer's act of endorsing and depositing the check without explicit reservation operated as an acceptance of the settlement, discharging the entire remaining balance[cite: 13]."
    },
    {
        id: 13,
        topic: "Consideration / Settlement of Disputed Claim",
        fp: "In a written contract, an architect agreed to draw up plans for and to supervise construction of a client's new house. In return, the client agreed to pay the architect a fee of $10,000 to be paid upon the house's completion. After completion, the client claimed erroneously but in good faith that the architect's plans were defective. The client orally offered to pay the architect $7,500 in full settlement of the claim for the fee. The architect orally accepted that offer despite the fact that the reasonable value of his services was in fact $10,000. The client paid the architect $7,500 pursuant to their agreement. The architect subsequently sued the client for the remaining $2,500. In a preliminary finding, the trier of fact found that there were no defects in the architect's plans.",
        q: "Will the architect be likely to prevail in his action against the client for $2,500?",
        opts: [
            "Yes, because payment of $7,500 cannot furnish consideration for the architect's promise to surrender his claim.",
            "Yes, because the oral agreement to modify the written contract is not enforceable.",
            "No, because the architect's promise to accept $7,500 became binding when the client made the payment.",
            "No, because the architect's acceptance of partial payment constituted a novation."
        ],
        ans: 2,
        exp: "When a claim is subject to a bona fide good-faith dispute, an agreement to accept a lesser amount in full settlement is supported by valid consideration (the compromise of the disputed claim)[cite: 13]. Performance of that agreement (satisfaction) discharges the original obligation[cite: 13]. Because the client disputed the fee in good faith, the accord and satisfaction is valid and binding upon payment[cite: 13]."
    },
    {
        id: 14,
        topic: "Formation / Illusory Promises (Conditions)",
        fp: "A buyer, who was a representative of a bank, contracted in writing with a shareholder, who owned all of a corporation's outstanding stock, to purchase all of her stock at a specified price per share. At the time this contract was executed, the buyer said to the shareholder, 'Of course, our commitment to buy is conditioned on our obtaining approval of the contract from the bank's board of directors.' The shareholder replied, 'Fine. No problem.' The board orally approved the contract, but the shareholder changed her mind and refused to consummate the sale on two grounds: (1) when the agreement was made there was no consideration for her promise to sell; and (2) the board's approval of the contract was invalid.",
        q: "If the buyer sues the shareholder for breach of contract, is the buyer likely to prevail?",
        opts: [
            "Yes, because the buyer's promise to buy, bargained for and made in exchange for the shareholder's promise to sell, was good consideration even though it was expressly conditioned on an event that was not certain to occur.",
            "Yes, because any possible lack of consideration for the shareholder's promise to sell was expressly waived by the shareholder when the agreement was made.",
            "No, because mutuality of obligation between the parties was lacking when the agreement was made.",
            "No, because the condition of the board of director's approval of the contract was an essential part of the agreed exchange and was not in a signed writing."
        ],
        ans: 0,
        exp: "A bilateral contract is formed when the parties exchange mutual promises, each serving as consideration for the other[cite: 13]. A promise is not rendered illusory simply because it is made subject to an express condition that is outside the promisor's absolute control[cite: 13]. Furthermore, the law implies a duty of good faith and best efforts to satisfy such conditions[cite: 13]. Therefore, the buyer's promise provided valid consideration, forming an enforceable contract[cite: 13]."
    },
    {
        id: 15,
        topic: "Formation / Requirements Contracts (UCC 2-306)",
        fp: "Responding to County's written advertisement for bids, Tyres was the successful bidder for the sale of tires to County for County's vehicles. Tyres and County entered into a signed, written agreement that specified, 'It is agreed that Tyres will deliver all tires required by this agreement to County, in accordance with the attached bid form and specifications, for a one-year period beginning September 1, 2005.' Attached to the agreement was a copy of the bid form and specifications. In the written advertisement to which Tyres had responded, but not in the bid form, County had stated, 'Multiple awards may be issued if they are in the best interests of County.' No definite quantity of tires to be bought by County from Tyres was specified in any of these documents. In January 2006, Tyres learned that County was buying some of its tires from one of Tyres's competitors. Contending that the Tyres-County agreement was a requirements contract, Tyres sued County for the damages caused by County's buying some of its tires from the competitor.",
        q: "If the court concludes that the Tyres-County contract is an agreement by County to buy its tire requirements from Tyres, Tyres probably will",
        opts: [
            "recover under the Contracts Clause of the United States Constitution.",
            "recover under the provisions of the Uniform Commercial Code.",
            "not recover, because the agreement lacks mutuality of obligation.",
            "not recover, because the agreement is indefinite as to quantity."
        ],
        ans: 1,
        exp: "Under UCC § 2-306(1), a requirements contract is fully valid and enforceable even though it lacks a specific numerical quantity term[cite: 13]. The UCC supplies the missing quantity term by requiring the buyer to purchase their actual good-faith requirements from the seller[cite: 13]. Therefore, if interpreted as a requirements contract, Tyres is entitled to recover under the provisions of the Uniform Commercial Code[cite: 13]."
    },
    {
        id: 16,
        topic: "Formation / Exclusive Dealing & Best Efforts",
        fp: "Under a written agreement a manufacturer of pastries promised to sell its entire output of baked buns at a specified unit price to a bakery, for one year. The bakery promised not to sell any other supplier's baked buns. Shortly after making the contract, and before the manufacturer had tendered any buns, the bakery decided that the contract had become undesirable because of a sudden, sharp decline in its customers' demand for baked buns. It renounced the agreement, and the manufacturer sues for breach of contract.",
        q: "Which of the following will the court probably decide?",
        opts: [
            "The bakery wins, because mutuality of obligation was lacking in that the bakery made no express promise to buy any of the manufacturer's baked buns.",
            "The bakery wins, because the agreement was void for indefiniteness of quantity and total price for the year involved.",
            "The manufacturer wins, because the bakery's promise to sell at retail the manufacturer's baked buns exclusively, if it sold any such buns at all, implied a promise to use its best efforts to sell bakery's one-year output of baked buns.",
            "The manufacturer wins, because under the applicable law both parties to a sale-of-goods contract impliedly assume the risk of price and demand fluctuations."
        ],
        ans: 2,
        exp: "Under UCC § 2-306(2), an exclusive dealing contract imposes an implied obligation by the buyer to use 'best efforts' to promote and sell the goods[cite: 13]. Because the bakery promised to deal exclusively in the manufacturer's buns, an obligation of best efforts is implied by law, curing any potential lack of mutuality and making the agreement fully enforceable[cite: 13]."
    },
    {
        id: 17,
        topic: "Promissory Estoppel / Restraining Reliance",
        fp: "Dominique obtained a bid of $10,000 to tear down her old building and another bid of $90,000 to replace it with a new structure in which she planned to operate a sporting goods store. Having only limited cash available, Dominique asked Hardcash for a $100,000 loan. After reviewing the plans for the project, Hardcash in a signed writing promised to lend Dominique $100,000 secured by a mortgage on the property and repayable over ten years in equal monthly installments at 10% annual interest. Dominique promptly accepted the demolition bid and the old building was removed, but Hardcash thereafter refused to make the loan. Despite diligent efforts, Dominique was unable to obtain a loan from any other source.",
        q: "Does Dominique have a cause of action against Hardcash?",
        opts: [
            "Yes, because by having the building demolished, she accepted Hardcash's offer to make the loan.",
            "Yes, because her reliance on Hardcash's promise was substantial, reasonable, and foreseeable.",
            "No, because there was no bargained-for exchange of consideration for Hardcash's promise to make the loan.",
            "No, because Dominique's inability to obtain a loan from any other source demonstrated that the project lacked the financial soundness that was a constructive condition to Hardcash's performance."
        ],
        ans: 1,
        exp: "Even where a promise lacks bargained-for consideration (such as an unaccepted loan commitment), it can become fully binding under the doctrine of promissory estoppel (Restatement § 90) if the promisor should reasonably expect to induce substantial action or forbearance, and such action is indeed induced[cite: 13]. Here, Hardcash's written promise led directly to Dominique incurring the substantial detriment of demolishing her building, making the promise enforceable to avoid injustice[cite: 13]."
    },
    {
        id: 18,
        topic: "Defenses / Mutual Mistake (Assumption of Risk)",
        fp: "A breeder bought a two-month-old registered boar at auction from a farmer for $800. No express warranty was made. Fifteen months later, tests by experts proved conclusively that the boar had been born incurably sterile. If this had been known at the time of the sale, the boar would have been worth no more than $100. In an action by the breeder against the farmer to avoid the contract and recover the price paid, the parties stipulate that, as both were and had been aware, the minimum age at which the fertility of a boar can be determined is about 12 months.",
        q: "Which of the following will the court probably decide?",
        opts: [
            "The breeder wins, because the parties were mutually mistaken as to the boar's fertility when they made the agreement.",
            "The breeder wins, because the farmer impliedly warranted that the boar was fit for breeding.",
            "The farmer wins, because the breeder assumed the risk of the boar's sterility.",
            "The farmer wins, because any mistake involved was unilateral, not mutual."
        ],
        ans: 2,
        exp: "Under the doctrine of mutual mistake, a contract is voidable unless the adversely affected party bears the risk of the mistake[cite: 13]. A party bears the risk of a mistake when they are aware, at the time of contracting, that they have only limited knowledge regarding the facts but treat that limited knowledge as sufficient (conscious ignorance)[cite: 13]. Because both parties knew the boar was too young to test for fertility, the breeder consciously accepted the risk that the animal might turn out to be sterile[cite: 13]."
    },
    {
        id: 19,
        topic: "Remedies / Reformation",
        fp: "A landowner and a prospective buyer, standing on a parcel owned by the landowner, orally agreed to its sale and purchase for $5,000, and orally marked its bounds as 'that line of trees down there, the ditch that intersects them, the fence on the other side, and that street on the fourth side.'",
        q: "In which of the following is the remedy of reformation most appropriate?",
        opts: [
            "As later reduced to writing, the agreement by clerical mistake included two acres that are actually beyond the fence.",
            "The buyer reasonably thought that two acres beyond the fence were included in the oral agreement but the landowner did not. As later reduced to writing, the agreement included the two acres.",
            "The buyer reasonably thought that the price orally agreed upon was $4,500, but the landowner did not. As later reduced to writing, the agreement said $5,000.",
            "The buyer reasonably thought that a dilapidated shed backed up against the fence was to be torn down and removed as part of the agreement, but the landowner did not. As later reduced to writing, the agreement said nothing about the shed."
        ],
        ans: 0,
        exp: "Reformation is an equitable remedy used to rewrite a written contract to reflect the actual, prior intent of both parties when a clerical error or scrivener's mistake causes the written instrument to diverge from that mutual intent[cite: 13]. Where a clerical mistake accidentally includes extra land beyond the mutually agreed boundaries, reformation is the precise and appropriate remedy[cite: 13]."
    },
    {
        id: 20,
        topic: "Parol Evidence Rule / Partial Integration",
        fp: "Stirrup, a rancher, and Equinox, a fancier of horses, signed the following writing: 'For $55,000, Stirrup will sell to Equinox a gray horse that Equinox may choose from among the grays on Stirrup's ranch.' Equinox refused to accept delivery of a gray horse timely tendered by Stirrup or to choose among those remaining, on the ground that during their negotiations Stirrup had orally agreed to include a saddle, worth $100, and also to give Equinox the option to choose a gray or a brown horse. Equinox insisted on one of Stirrup's brown horses, but Stirrup refused to part with any of his browns or with the saddle as demanded by Equinox.",
        q: "If Equinox sues Stirrup for damages and seeks to introduce evidence of the alleged oral agreement, the court probably will",
        opts: [
            "admit the evidence as to both the saddle and the option to choose a brown horse.",
            "admit the evidence as to the saddle but not the option to choose a brown horse.",
            "admit the evidence as to the option to choose a brown horse but not the promise to include the saddle.",
            "not admit any of the evidence."
        ],
        ans: 1,
        exp: "Under the Parol Evidence Rule, if a written contract is only a partial integration, consistent additional terms may be proved by extrinsic evidence, but terms that directly contradict the express writing are barred[cite: 13]. The written agreement specifies a gray horse, so allowing evidence of an option to choose a brown horse directly contradicts an express term and is barred[cite: 13]. However, the writing is silent regarding accessories like a saddle; thus, the oral agreement for the saddle is a consistent additional term that is admissible under partial integration[cite: 13]."
    },
    {
        id: 21,
        topic: "Parol Evidence Rule / Condition Precedent",
        fp: "Buyer, Inc., contracted in writing with Shareholder, who owned all of XYZ Corporation's outstanding stock, to purchase all of her stock at a specified price per share. At the time this contract was executed, Buyer's contracting officer said to Shareholder, 'Of course, our commitment to buy is conditioned on our obtaining approval of the contract from Conglomerate, Ltd., our parent company.' Shareholder replied, 'Fine. No problem.' Later, Shareholder was willing and ready to consummate the sale of her stock to Buyer, but the latter refused to perform on the ground (which was true) that Conglomerate had firmly refused to approve the contract.",
        q: "If Shareholder sues Buyer for breach of contract and seeks to exclude any evidence of the oral condition requiring Conglomerate's approval, the court will probably",
        opts: [
            "admit the evidence as proof of a collateral agreement.",
            "admit the evidence as proof of a condition to the existence of an enforceable obligation, and therefore not within the scope of the parol evidence rule.",
            "exclude the evidence on the basis of a finding that the parties' written agreement was a complete integration of their contract.",
            "exclude the evidence as contradicting the terms of the parties' written agreement, whether or not the writing was a complete integration of their contract."
        ],
        ans: 1,
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce extrinsic evidence demonstrating that the written agreement was subject to an oral condition precedent to its formation or legal effectiveness[cite: 13]. Because the evidence goes to whether an enforceable obligation ever came into existence (rather than trying to vary or contradict an active, operative term), it falls entirely outside the scope of the Parol Evidence Rule[cite: 13]."
    },
    {
        id: 22,
        topic: "Terms / Interpretation (Ambiguity and Trade Usage)",
        fp: "Responding to County's written advertisement for bids, Tyres was the successful bidder for the sale of tires to County for County's vehicles. Tyres and County entered into a signed, written agreement that specified, 'It is agreed that Tyres will deliver all tires required by this agreement to County, in accordance with the attached bid form and specifications, for a one-year period beginning September 1, 2005.' Attached to the agreement was a copy of the bid form and specifications. In the written advertisement to which Tyres had responded, but not in the bid form, County had stated, 'Multiple awards may be issued if they are in the best interests of County.' No definite quantity of tires to be bought by County from Tyres was specified in any of these documents. In January 2006, Tyres learned that County was buying some of its tires from one of Tyres's competitors. Contending that the Tyres-County agreement was a requirements contract, Tyres sued County for the damages caused by County's buying some of its tires from the competitor.",
        q: "If County defends by offering proof of the advertisement concerning the possibility of multiple awards, should the court admit the evidence?",
        opts: [
            "Yes, because the provision in the written agreement, 'all tires required by this agreement,' is ambiguous.",
            "Yes, because the advertisement was in writing.",
            "No, because of the parol evidence rule.",
            "No, because it would make the contract illusory."
        ],
        ans: 0,
        exp: "When a written contract contains a term that is ambiguous or susceptible to multiple interpretations (such as whether 'all tires required' creates an exclusive requirements contract), courts will allow extrinsic evidence—including preliminary negotiations, advertisements, and surrounding circumstances—to help interpret the true intent of the parties, bypassing the strict bars of the Parol Evidence Rule[cite: 13]."
    },
    {
        id: 23,
        topic: "Parol Evidence Rule / Course of Dealing",
        fp: "A buyer and a seller entered into a written contract for the sale of a copy machine, using the same form contract that they had used a number of times in the past. The contract stated that payment was due 30 days after delivery and provided that the writing contained the complete and exclusive statement of the parties' agreement. On several past occasions, the buyer had taken a 5% discount from the contract price when paying within 10 days of delivery, and the seller had not objected. On this occasion, when the buyer took a 5% discount for paying within 10 days, the seller objected because his profit margin on this particular machine was smaller than on his other machines.",
        q: "If the seller sues the buyer for breach of contract, may the buyer introduce evidence that the 5% discount was a term of the agreement?",
        opts: [
            "No, because the seller timely objected to the buyer's proposal for different terms.",
            "No, because the writing contained the complete and exclusive agreement of the parties.",
            "Yes, because a modification made in good faith does not require consideration.",
            "Yes, because evidence of course of dealing is admissible even if the writing contains the complete and exclusive agreement of the parties."
        ],
        ans: 3,
        exp: "Under UCC § 1-303 (formerly § 1-205), evidence of a 'course of dealing' (a sequence of previous conduct between the parties establishing a common basis of understanding) is always admissible to explain, supplement, or qualify the terms of a written agreement[cite: 13]. This remains true even if the writing is found to be a complete and exclusive integration (merger clause), because course of dealing helps interpret what the written terms actually mean in context[cite: 13]."
    },
    {
        id: 24,
        topic: "Performance / Duty to Cooperate & Satisfy Conditions",
        fp: "A seller entered into a contract to sell to a buyer a house for a price of $150,000. The contract contained the following clause: 'This contract is conditional on the buyer's securing bank financing at an interest rate of 7% or below.' The buyer did not make an application for bank financing and therefore did not secure it, and refused to proceed with the purchase. The seller sued the buyer for breach of contract.",
        q: "Is the seller likely to prevail?",
        opts: [
            "No, because the buyer did not secure bank financing.",
            "No, because the contract did not expressly impose on the buyer any obligation to apply for bank financing.",
            "Yes, because a court will excuse the condition to avoid a disproportionate forfeiture.",
            "Yes, because a court will imply a term imposing on the buyer a duty to use reasonable efforts to secure bank financing."
        ],
        ans: 3,
        exp: "Every contract contains an implied covenant of good faith and fair dealing[cite: 13]. When a party's performance is subject to a condition precedent that requires their own cooperation (such as securing bank financing), the law implies a duty obligating that party to use reasonable, good-faith efforts to satisfy the condition[cite: 13]. Because the buyer made no effort to apply for a loan, he breached this implied duty, excusing the condition and rendering him liable for breach[cite: 13]."
    },
    {
        id: 25,
        topic: "Performance / Waiver of Condition",
        fp: "In a writing signed by both parties on December 1, a buyer agreed to buy from a seller a gasoline engine for $1,000, delivery to be made on the following February 1. Through a secretarial error, the writing called for delivery on March 1, but neither party noticed the error until February 1. Before signing the agreement, the buyer and seller orally agreed that the contract of sale would be effective only if the buyer should notify the seller in writing not later than January 2 that the buyer had arranged to resell the engine to a third person. Otherwise, they agreed orally, 'There is no deal.' On December 15, the buyer entered into a contract with a third person to resell the engine to the third person at a profit. On December 16, the buyer notified the seller by telephone of the buyer's resale agreement with the third person, and explained that a written notice was unfeasible because the buyer's secretary was ill. The seller replied, 'That's okay. I'll get the engine to you on February 1, as we agreed.' Having learned, however, that the engine had increased in value about 75% since December 1, the seller renounced the agreement on February 1.",
        q: "If the buyer sues the seller on February 2 for breach of contract, which of the following concepts best supports the buyer's claim?",
        opts: [
            "Substantial performance.",
            "Nonoccurrence of a condition subsequent.",
            "Waiver of condition.",
            "Novation of buyers."
        ],
        ans: 2,
        exp: "A party protected by an express condition may waive the benefit of that condition by words or conduct indicating an intent to forego strict compliance[cite: 13]. Here, the requirement of written notice by January 2 was a condition precedent to the contract's effectiveness. When the buyer provided oral notice instead, the seller explicitly stated 'That's okay,' which constituted a binding waiver of the strict written notice requirement, preventing the seller from later renouncing the deal[cite: 13]."
    }
];