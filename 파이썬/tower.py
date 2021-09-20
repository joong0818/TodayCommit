def tower(line):
    a = range(1 , line + 1)
    count = 1
    for i in a:
        b = range(i)

        space(line - i)

        for j in b:
            e = num(count)
            count += 1
            print(e, end=' ')

        if i != line :
            print()

def space(number):
    c = range(number)

    for i in c:
        print('' , end=' ')

def num(d):
    return d%10


tower(15)

